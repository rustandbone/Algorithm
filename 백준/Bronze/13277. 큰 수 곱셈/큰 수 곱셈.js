const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

const [a, b] = input.split(' ').map(BigInt);

console.log(solution(a, b).toString());

function solution(a, b) {
  return a * b;
}