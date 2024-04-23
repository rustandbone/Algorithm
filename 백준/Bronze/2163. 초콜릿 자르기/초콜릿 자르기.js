const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split(' ');

const [n, m] = input.map(Number);

console.log(n * m - 1);