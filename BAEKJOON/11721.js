const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim();

const length = input.length;
let count = 0;
const answer = [];

while (count < length) {
  answer.push(input.slice(count, count + 10));
  count += 10;
}

console.log(answer.join('\n'));
