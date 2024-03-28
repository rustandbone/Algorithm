const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let whiteCount = 0;

input.forEach((v, i) => {
  v.split('').forEach((el, idx) => {
    if (i % 2 === 0 && idx % 2 === 0 && el === 'F') {
      whiteCount++;
    } else if (i % 2 === 1 && idx % 2 === 1 && el === 'F') {
      whiteCount++;
    }
  });
});

console.log(whiteCount);
