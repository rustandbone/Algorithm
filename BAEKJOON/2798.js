const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const limitNum = input[0].split(' ')[1];
const arr = input[1].split(' ').map(Number);

let answer = 0;

for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum <= limitNum && sum > answer) answer = sum;
    }
  }
}

console.log(answer);
