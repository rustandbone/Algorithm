const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

const answer = [];

input.forEach((v) => {
  v.split('')
    .filter((vl) => vl !== '\r')
    .forEach((el, i) => {
      if (answer[i] === undefined) answer[i] = el;
      else if (el !== answer[i]) answer[i] = '?';
    });
});

console.log(answer.join(''));