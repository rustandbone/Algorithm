const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

let answer = 'mixed';

solution(input.map(Number));

console.log(answer);

function solution(input) {
  if (input[0] === 1) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== i + 1) {
        return;
      }
    }
    answer = 'ascending';
  } else if (input[0] === 8) {
    for (let i = 7; i >= 0; i--) {
      if (input[i] !== 8 - i) {
        return;
      }
    }
    answer = 'descending';
  }
}
