const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

const reverseNum = input.split('').reverse().join('');

console.log(Math.max(...reverseNum.split(' ')));
