const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const properNames = input.filter((name) => name.trim().length === 3);

console.log(properNames.sort()[0].trim());