const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  input[i] = input[i].split(' ').map(Number);
  const [a, b] = input[i];

  if (Number.isInteger(a / b)) {
    console.log('multiple');
  } else if (Number.isInteger(b / a)) {
    console.log('factor');
  } else {
    console.log('neither');
  }
}