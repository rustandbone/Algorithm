const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const word = input.slice(1);

let checkGroup = {};
let count = 0;

for (let i = 0; i < word.length; i++) {
  const confirmGroup = word[i].split('').every((v, index) => {
    if (checkGroup[v] === undefined) {
      checkGroup[v] = v;
      return true;
    }
    if (v === word[i][index - 1]) {
      return true;
    }
  });
  if (confirmGroup) count++;
  checkGroup = {};
}

console.log(count);
