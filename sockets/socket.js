const {io} = require('../index');
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
     });

     client.on('mensaje',(payload)=>{
        console.log('Mensajes',payload);
        
        io.emit('mensaje',{admin: 'Nuevo mensaje'});
     });
});