const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.pop();

input.forEach((v) => {
  let answer = 0;
  const arr = v.split('').filter((v) => v !== '\r');
  answer += arr.length + 1;

  arr.forEach((v) => {
    if (+v === 1) answer += 2;
    else if (+v === 0) answer += 4;
    else answer += 3;
  });

  console.log(answer);
});
