const ModbusTcpRequest = require("../ModbusTcpRequest");

class ReadCoilRequest {
    request;
    packetLength = 6;
    protocolId = 0
    functionCode = 1;
    constructor(transactionId, unitId = 1, startAddress, amountOfRegisters)
    {
        this.request = new ModbusTcpRequest(
            transactionId, 
            this.protocolId, 
            this.packetLength, 
            unitId, 
            this.functionCode, 
            startAddress, 
            amountOfRegisters
            );
    }

    createMsg()
    {
        return this.request.buff;
    }

}

module.exports = ReadCoilRequest;