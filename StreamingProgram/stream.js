const fs = require(`fs`);

const file = `readTextFile.txt`;

const readableStream = fs.createReadStream(file);

const writeableStream = fs.createWriteStream(`writeTextFile.txt`);

readableStream.on(`data`, function(data) {

console.log(`Reading data from ${file}...`);

    if (writeableStream.write(data) === true) {

    console.log(`Writing finished!`);

    }

    else {
        console.log(`Write not successful.`);
    }


});

