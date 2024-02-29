const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [num, order] = input;

const divisor = [];

for (let i = 1; i <= num; i++) {
  if (num % i === 0) divisor.push(i);
  if (divisor.length === +order) break;
}

console.log(divisor[order - 1] ? divisor.at(-1) : 0);
