const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').toString().trim();

const num = Number(input);

let answer = 0;
let length = 1;
let count = 9;
let base = 1;

while (num >= base) {
  const currentRange = Math.min(num - base + 1, count);
  answer += currentRange * length;
  length++;
  base *= 10;
  count *= 10;
}

console.log(answer);