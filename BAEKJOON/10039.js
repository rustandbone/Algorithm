const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

console.log(
  input.reduce((acc, cur) => {
    if (cur < 40) cur = 40;
    return acc + +cur;
  }, 0) / input.length
);
