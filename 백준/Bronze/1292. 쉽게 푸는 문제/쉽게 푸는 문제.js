const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split(' ');

const [a, b] = input.map(Number);

let total = 0;
let sum = 0;
let currentNum = 0;

for (let i = 1; total < b; i++) {
  for (let j = 0; j < i && total < b; j++) {
    if (total + 1 >= a) {
      sum += i;
    }
    total++;
  }
  currentNum = i;
}

console.log(sum);