var buf1 = Buffer.alloc(5);

var buf4 = Buffer.from([10,20,30,40,50]);

var buf6 = Buffer.from(`Hi Packet students!`, `utf-8`);

len = buf6.write(`Packt student`, `utf-8`);

console.log(buf6.toString(`utf-8`,0,13));