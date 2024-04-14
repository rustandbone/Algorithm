const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const cardMap = new Map();

input[1].split(' ').forEach((card) => {
  cardMap.set(+card, cardMap.get(+card) + 1 || 1);
});

const answer = input[3].split(' ').map((card) => {
  if (cardMap.has(+card)) {
    return cardMap.get(+card);
  } else {
    return 0;
  }
});

console.log(answer.join(' '));