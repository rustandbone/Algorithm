const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(BigInt);

const [p, k] = input;

let answer = 'GOOD';

for (let i = 2n; i < k; i++) {
  if (p % i === 0n) {
    answer = `BAD ${Number(i)}`;
    break;
  }
}

console.log(answer);