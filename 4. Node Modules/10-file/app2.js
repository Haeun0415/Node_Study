const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :)') //
  .catch(console.error);

fs.appendFile('./file.txt', 'Yo, Dream Coders! :)') //
  .catch(console.error);

// copy
// 그냥 이렇게 두면 코드가 비동기식으로 처리되기 때문에
// file에 내용을 쓰기 전에 먼저 복사가 될 수 있음.
// 동기식으로 appendfile 실행 후 파일을 복사하고 싶으면
// appendFile에서 then을 추가 후 적어주면 됨!
fs.copyFile('./file.txt', './file2.txt') //
  .catch(console.error);

// folder
fs.mkdir('sub-folder')
  .catch(console.error);

fs.readdir('./')
  .then(console.log)
  .catch(console.error);