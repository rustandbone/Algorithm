const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim();

let pay = 1000 - +input;

const money = [500, 100, 50, 10, 5, 1];
let count = 0;

money.forEach((m) => {
  count += Math.floor(pay / m);
  pay %= m;
});

console.log(count);
