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

  if (v.length % 2 === 0) {
    const half = v.splice(v.length / 2);
    console.log(v.join(' ') === half.reverse().join(' ') ? 'yes' : 'no');
  } else {
    const half = v.splice(v.length / 2 + 1);
    v.pop();
    console.log(v.join(' ') === half.reverse().join(' ') ? 'yes' : 'no');
  }
});