const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

if (input === '') console.log(0);
else console.log(input.trim().split(' ').length);
