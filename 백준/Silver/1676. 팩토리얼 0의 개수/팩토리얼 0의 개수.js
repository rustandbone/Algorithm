const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

let facNum = factorial(input);
facNum = String(facNum).split('').reverse();

let answer = 0;

for (let i = 0; i < facNum.length; i++) {
  if (facNum[i] !== '0') {
    answer = i;
    break;
  }
}

console.log(answer);

function factorial(n) {
  n = BigInt(n);
  if (n === 0n) {
    return 1n;
  }
  return n * factorial(n - 1n);
}