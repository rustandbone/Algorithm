const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

let count = 0;

input[0].split(' ').forEach((v) => isPrimeNum(+v));

console.log(count);

function isPrimeNum(num) {
  if (num === 1) return;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return;
  }
  return count++;
}
