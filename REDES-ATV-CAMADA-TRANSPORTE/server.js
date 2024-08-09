const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        console.log(`Recebido do cliente: ${data}`);
        socket.write(`Echo: ${data}`);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor TCP escutando na porta 3000');
});
