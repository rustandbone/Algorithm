const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

let answer = 0;
let point = 0;

input[0].split(' ').forEach((v) => {
  if (v > 0) {
    point++;
    answer += point;
  } else {
    point = 0;
  }
});

console.log(answer);
