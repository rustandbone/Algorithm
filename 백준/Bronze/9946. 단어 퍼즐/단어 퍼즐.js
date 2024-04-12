const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const words = input.filter((_, i) => i % 2 === 0);

input.forEach((v, i) => {
  if (i % 2 === 1 && v !== 'END') {
    const count = {};

    const a = words[Math.floor(i / 2)].trim().split('');

    a.forEach((v) => {
      count[v] = (count[v] || 0) + 1;
    });

    v.trim()
      .split('')
      .forEach((el) => {
        count[el] = (count[el] || 0) - 1;
      });

    const result = Object.values(count).every((v) => v === 0);

    console.log(
      `Case ${Math.floor(i / 2) + 1}: ${result ? 'same' : 'different'}`
    );
  }
});