const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [x, y, w, h] = input.map(Number);

console.log(Math.min(x, y, w - x, h - y));
