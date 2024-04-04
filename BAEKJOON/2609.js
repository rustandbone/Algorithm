const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [a, b] = input.map(Number);

let gcd = 1;
let lcm = 1;

for (let i = 2; i <= Math.max(a, b); i++) {
  if (a % i === 0 && b % i === 0) gcd = i;
}

lcm = (a * b) / gcd;

console.log(gcd);
console.log(lcm);
