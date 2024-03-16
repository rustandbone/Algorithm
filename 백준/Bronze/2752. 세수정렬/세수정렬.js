const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const answer = input.map(Number).sort((a, b) => a - b);

console.log(answer.join(' '));