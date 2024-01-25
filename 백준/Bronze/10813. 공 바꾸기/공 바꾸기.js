const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let [N] = input[0].split(' ').map(Number);

const basket = {};

for (let i = 1; i <= N; i++) {
  basket[i] = i;
}

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ');

  const firstBall = basket[+a];
  const secondBall = basket[+b];

  basket[+a] = secondBall;
  basket[+b] = firstBall;
}

console.log(...Object.values(basket));
