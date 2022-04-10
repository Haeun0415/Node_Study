const fs = require('fs');

// 3
// rename(...., callback)
// renameSync(....) -> 에러사항 전달 X
// try { renameSync(....) } catch(e) { } -> 프로그램 죽이지 않으려면 예외처리 필요
// promises.rename().then().catch(0)

try{
  fs.renameSync('./text.txt', './text-new.txt');
} catch(error) {
  console.error(error);
}


fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello');

fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error);