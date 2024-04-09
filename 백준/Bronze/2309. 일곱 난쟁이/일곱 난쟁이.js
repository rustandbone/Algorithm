const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const numbers = input.map(Number);
const answer = [];

firstLoop: for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    let sum = 0;
    for (let k = 0; k < numbers.length; k++) {
      if (k !== i && k !== j) {
        sum += numbers[k];
        answer.push(numbers[k]);
      }
    }
    if (sum === 100) {
      break firstLoop;
    } else {
      answer.length = 0;
    }
  }
}

console.log(answer.sort((a, b) => a - b).join('\n'));