const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [a, operator, b] = input.map((v) => v.trim());

if (operator === '+') {
  console.log((BigInt(a) + BigInt(b)).toString());
} else {
  console.log((BigInt(a) * BigInt(b)).toString());
}
