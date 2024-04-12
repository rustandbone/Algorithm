const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.pop();

const reverseSentence = input.map((v) => {
  return v.split('').reverse().join('');
});

console.log(reverseSentence.join('\n'));