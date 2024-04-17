const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
input.pop();

const answer = [];

input.forEach((v, i, arr) => {
  let words = {};

  if (!isNaN(+v)) {
    const wordsArr = arr
      .slice(i + 1, i + +v + 1)
      .map((word) => {
        words[word.trim().toLowerCase()] = word.trim();
        return word.trim().toLowerCase();
      })
      .sort();

    answer.push(words[wordsArr[0]]);
  }
});

console.log(answer.join('\n'));