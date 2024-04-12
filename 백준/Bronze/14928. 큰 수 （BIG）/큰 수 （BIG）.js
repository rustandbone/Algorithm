const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

const cal = BigInt(input) % BigInt(20000303);

console.log(Number(cal));