const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

let [a, b] = input;

a = BigInt(a);
b = BigInt(b);

console.log((a + b).toString());