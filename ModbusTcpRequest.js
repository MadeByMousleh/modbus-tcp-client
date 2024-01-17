

class ModbusTcpRequest {

    // // 2 bytes
    // transactionId;

    // // 2 bytes
    // protocolId;

    // // 2 bytes
    // packetLength;

    // //1 bytes
    // unitId;

    // // 1 byte
    // functionCode;

    // // 2 bytes
    // startAddress;

    // //2 bytes
    // noOfRegisters;

    buff

    constructor(transactionId, protocolId = 0, length, unitId = 0, functionCode, startAddress, noOfRegisters) {

        this.buff = Buffer.alloc(12);
        this.buff.writeInt16BE(transactionId, 0);
        this.buff.writeInt16BE(protocolId, 2);
        this.buff.writeInt16BE(length, 4);
        this.buff.writeInt8(unitId, 6);
        this.buff.writeInt8(functionCode, 7);
        this.buff.writeInt16BE(noOfRegisters, 8);
        this.buff.writeInt16BE(startAddress, 10);

        // this.transactionId = transactionId;
        // this.protocolId = 0;
        // this.packetLength = length;
        // this.unitId = unitId;
        // this.functionCode = functionCode;
        // this.startAddress = startAddress;
        // this.noOfRegisters = noOfRegisters;
        // this.data = data;
    }
}

module.exports = ModbusTcpRequest;