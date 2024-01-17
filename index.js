const ModbusTcpClient = require("./ModbusTcpClient");

let modbusClient = new ModbusTcpClient(502, '127.0.0.1');

let transactionId = 0;

modbusClient.readCoils(transactionId, 1, 99, 1);

modbusClient.tcpClient.on('data', data => {
console.log(`Recieved from server ${data}`);
})