const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const num = input.join('');

let answer = 0;

for (let i = num - num.length * 9; i < num; i++) {
  const sum = String(i)
    .split('')
    .reduce((acc, cur) => acc + +cur, 0);

  if (sum + i === +num) {
    answer = i;
    break;
  }
}

console.log(answer);
