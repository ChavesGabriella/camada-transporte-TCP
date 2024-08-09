const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado ao servidor');
    client.write('Olá, servidor!');
});

client.on('data', (data) => {
    console.log(`Recebido do servidor: ${data}`);
    client.end();
});

client.on('end', () => {
    console.log('Desconectado do servidor');
});
