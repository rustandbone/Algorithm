const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const answer = input.map((v) => {
  let count = 0;
  const [a, b, c] = v.split(' ').map(Number);

  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      for (let k = 1; k <= c; k++) {
        if (i % j === j % k && k % i === j % k) count++;
      }
    }
  }

  return count;
});

console.log(answer.join('\n'));