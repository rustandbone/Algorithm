const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim();

let answer = '';

input.split('-').forEach((v) => (answer += v[0]));

console.log(answer);