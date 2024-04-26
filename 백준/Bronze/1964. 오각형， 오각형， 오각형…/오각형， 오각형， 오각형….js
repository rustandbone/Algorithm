const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim();

const n = BigInt(input);

const countDots = (3n * n ** 2n + 5n * n + 2n) / 2n;

console.log((countDots % 45678n).toString());