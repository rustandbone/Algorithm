const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.trim());

let words = [];

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] === '#') {
    solution(words) ? console.log('Incorrect') : console.log('Correct');
    words = [];
    continue;
  }

  words.push(input[i]);
}

function solution(words) {
  if (words.length === 0) return;

  const result = words.some((word, i) => {
    let count = 0;
    if (i === 0) return;

    word.split('').forEach((v, index) => {
      if (word.length !== words[i - 1].length) count += 2;
      else if (v !== words[i - 1][index]) count++;
    });

    return count > 1 || count === 0;
  });

  return result;
}