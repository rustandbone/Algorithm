const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

const [a, b] = input.split(' ').map(Number);

console.log(solution(a, b));

function solution(a, b) {
  return (a + b) * (a - b);
}
