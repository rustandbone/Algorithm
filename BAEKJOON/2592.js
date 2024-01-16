const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const duplCheck = {};
const sum = input.reduce((acc, cur) => {
  if (duplCheck[cur] >= 0) {
    duplCheck[cur]++;
  } else {
    duplCheck[cur] = 0;
  }

  return acc + Number(cur);
}, 0);
const count = input.length;

const sort = Object.entries(duplCheck).sort((a, b) => b[1] - a[1]);

console.log(sum / count);
console.log(sort[0][0]);
