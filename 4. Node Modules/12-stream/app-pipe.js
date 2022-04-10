const fs = require('fs');
const zlib = require('zlib');

const readStream =  fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream =fs.createWriteStream('./file4.txt');
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
  console.log('done!!');
});

const http = require('http');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const server = http.createServer((req, res) => {
  fs.readFile('file.txt', (err, data) => {
    res.end(data);
  });
});

server.listen(3000);