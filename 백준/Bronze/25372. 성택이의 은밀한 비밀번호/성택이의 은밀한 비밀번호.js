const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

input.forEach((v) => {
  const arr = v.trim().split('');

  arr.length < 6
    ? console.log('no')
    : arr.length > 9
    ? console.log('no')
    : console.log('yes');
});