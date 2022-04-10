const fs = require('fs');
const data = [];

const readStream =  fs.createReadStream('./file.txt', {
  highWaterMark: 8, 
  // encoding: 'utf-8',
});
readStream.once('data', (chunk) => {
  // console.log(chunk);
  data.push(chunk);
  console.count('data');
});
readStream.on('end', () => {
    console.log(data.join(''));
});

readStream.on('error', (chunk) => {
    console.log(error);
});
