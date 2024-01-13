const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const t = input[0];
const arr = input[1].split(' ');
const v = input[2];

const count = arr.filter((el) => el === v);

console.log(count.length);
