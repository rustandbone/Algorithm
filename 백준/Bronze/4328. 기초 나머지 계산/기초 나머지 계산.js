const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.pop();

input.forEach((v) => {
  let [b, p, m] = v.split(' ');
  console.log(modInBase(p, m, b));
});

function modInBase(p, m, b) {
  let remainder = 0;
  m = parseInt(m, b);

  for (let i = 0; i < p.length; i++) {
    remainder = remainder * b + parseInt(p[i], b);
    remainder %= m;
  }
  
  return remainder.toString(b);
}