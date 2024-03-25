const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.pop();

input.forEach((v) => {
  v = v
    .split('')
    .filter((v) => v !== '\r')
    .map(Number);

  const copy = [...v];
  console.log(v.join(' ') === copy.reverse().join(' ') ? 'yes' : 'no');
});
