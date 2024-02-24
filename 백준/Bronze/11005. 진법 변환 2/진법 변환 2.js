const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [num, base] = input;

console.log(Number(num).toString(base).toUpperCase());
