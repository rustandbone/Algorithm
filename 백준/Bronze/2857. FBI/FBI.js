const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const answer = [];

input.forEach((v, i) => {
  if (v.includes('FBI')) answer.push(i + 1);
});

console.log(answer.length === 0 ? 'HE GOT AWAY!' : answer.join(' '));