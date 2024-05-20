const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').toString().trim();

console.log(Math.floor(Math.sqrt(input)));