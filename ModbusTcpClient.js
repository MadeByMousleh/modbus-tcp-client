let net = require('net');
const ReadCoilRequest = require('./requests/readCoil');

class ModbusTcpClient {

    port = 502;
    host = '127.0.0.1';
    tcpClient;
    transacations = [];
    constructor(port, host)
    {
        this.tcpClient = new net.Socket();
        this.tcpClient.connect(port, host, () => {
            console.log('Connected');
        })
    }

    readCoils(transactionId, startAddress, count)
    {
        let readColisRequest = new ReadCoilRequest(transactionId, 1, startAddress, count);
        let message = readColisRequest.createMsg();
        this.tcpClient.write(message);
    }
}


module.exports = ModbusTcpClient;