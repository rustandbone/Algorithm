const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

console.log(input[1].split('').reduce((acc, cur) => acc + +cur, 0));
