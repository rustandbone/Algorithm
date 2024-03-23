const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let answer = [];

while (input.length > 0) {
  calculate(input);
}

console.log(answer.join('\n'));

function calculate(arr) {
  let a = arr.splice(1, arr[0]);
  arr.shift();

  const result = a.reduce((acc, cur) => BigInt(acc) + BigInt(cur), 0);

  result === BigInt(0)
    ? answer.push(0)
    : result > BigInt(0)
    ? answer.push('+')
    : answer.push('-');
}