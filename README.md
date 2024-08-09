## A camada de transporte TCP é implementada no código do servidor e do cliente para fornecer comunicação confiável e ordenada entre as duas máquinas. Ela lida com o estabelecimento de conexões, transferência de dados, controle de tráfego e congestionamento, e encerramento de conexões. Os desenvolvedores podem se concentrar no envio e recebimento de dados, enquanto o TCP garante que as comunicações permaneçam robustas mesmo sob condições adversas de rede.

## net.createServer(): Cria um servidor TCP.
## socket.on('data'): Lida com dados recebidos do cliente.
## socket.write(): Envia dados de volta para o cliente.
## socket.on('end'): Lida com a desconexão do cliente.
## server.listen(3000): Inicia o servidor e escuta na porta 3000.
