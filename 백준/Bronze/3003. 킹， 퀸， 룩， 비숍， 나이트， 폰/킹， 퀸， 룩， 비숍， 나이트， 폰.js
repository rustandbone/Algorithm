const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const chessCount = [1, 1, 2, 2, 2, 8];

console.log(input.map((v, i) => chessCount[i] - v).join(' '));
