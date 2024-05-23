const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split(' ');

const [n, k] = input.map(Number);

const num = Array.from({ length: n }, (_, i) => i + 1);
const answer = [];
let count = 0;

while (num.length > 0) {
  count++;
  const n = num.shift();

  if (count % k === 0) {
    answer.push(n);
  } else {
    num.push(n);
  }
}

console.log(`<${answer.join(', ')}>`);