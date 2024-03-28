const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const color = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

let answer = '';

input.forEach((v, i) => {
  v = v
    .split('')
    .filter((v) => v !== '\r')
    .join('');

  if (i < 2) {
    answer += color.indexOf(v);
  } else {
    answer *= 10 ** color.indexOf(v);
  }
});

console.log(answer);
