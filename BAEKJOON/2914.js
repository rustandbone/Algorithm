const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [a, i] = input.map(Number);

console.log(a * (i - 1) + 1);
