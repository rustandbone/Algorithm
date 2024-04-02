const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [n, k] = input.map(Number);

console.log(factorial(n) / (factorial(n - k) * factorial(k)));

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
