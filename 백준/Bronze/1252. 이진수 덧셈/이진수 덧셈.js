const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [a, b] = input;

console.log((BigInt('0b' + a) + BigInt('0b' + b)).toString(2));