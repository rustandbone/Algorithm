const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [n, k] = input.map(Number);

const answer = [];

const arr = Array.from({ length: n }, (_, i) => i + 1);

while (arr.length > 0) {
  for (let i = 0; i < k - 1; i++) {
    arr.push(arr.shift());
  }
  answer.push(arr.shift());
}

console.log(`<${answer.join(', ')}>`);