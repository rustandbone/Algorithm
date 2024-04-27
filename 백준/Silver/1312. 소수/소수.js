const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split(' ');

let [a, b, n] = input.map(Number);
let answer = 0;

for (i = 0; i < n; i++) {
  a = (a % b) * 10;
  answer = a / b;
}

console.log(parseInt(answer));