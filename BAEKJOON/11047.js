const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);

const arr = input.slice(1).map(Number);

let count = 0;

for (let i = n - 1; i >= 0; i--) {
  if (arr[i] > k) continue;

  count += Math.floor(k / arr[i]);
  k %= arr[i];

  if (k === 0) break;
}

console.log(count);
