const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

console.log(
  input
    .map((v) => {
      let [a, b] = v.split(' ').map(BigInt);
      if (a % 10n === 0n) {
        a = 10n;
      } else {
        a = String(a).at(-1);
      }
      b = b % 4n;
      if (b === 0n) b = 4n;
      const computer = Number(BigInt(a) ** BigInt(b) % BigInt(10));
      return computer === 0 ? 10 : computer;
    })
    .join('\n')
)