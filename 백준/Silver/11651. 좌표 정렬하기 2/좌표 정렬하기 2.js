const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const coordinate = input
  .map((v) => {
    const [x, y] = v.split(' ').map(Number);
    return [x, y];
  })
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

console.log(coordinate.map((v) => v.join(' ')).join('\n'));