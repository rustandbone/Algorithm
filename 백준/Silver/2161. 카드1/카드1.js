const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').toString().trim();

const card = Array.from({ length: input }, (_, i) => i + 1);
const answer = [];

while (card.length > 1) {
  answer.push(card.shift());
  card.push(card.shift());
}

answer.push(card.shift());

console.log(answer.join(' '));