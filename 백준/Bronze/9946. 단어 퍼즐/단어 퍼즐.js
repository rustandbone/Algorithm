const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const words = input.filter((_, i) => i % 2 === 0);

input.forEach((v, i) => {
  if (i % 2 === 1 && v !== 'END') {
    const count = new Map();

    const word1 = words[Math.floor(i / 2)].trim();
    const word2 = v.trim();

    for (let char of word1) {
      count.set(char, (count.get(char) || 0) + 1);
    }

    for (let char of word2) {
      if (!count.has(char)) {
        count.set(char, -1);
      } else {
        count.set(char, count.get(char) - 1);
      }
    }

    let result = true;

    for (let [_, value] of count) {
      if (value !== 0) {
        result = false;
        break;
      }
    }

    console.log(
      `Case ${Math.floor(i / 2) + 1}: ${result ? 'same' : 'different'}`
    );
  }
});