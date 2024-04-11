const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = {};

input[1].split(' ').forEach((number) => (n[+number] = 1));

input[3].split(' ').forEach((number) => {
  if (n[number]) {
    console.log(1);
  } else {
    console.log(0);
  }
});