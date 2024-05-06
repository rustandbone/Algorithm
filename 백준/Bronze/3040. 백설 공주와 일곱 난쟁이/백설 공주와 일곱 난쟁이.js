const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

outer: for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    const dwarf = input.filter((d, index) => index !== i && index !== j);
    if (dwarf.reduce((a, b) => a + b, 0) === 100) {
      console.log(dwarf.join('\n'));
      break outer;
    }
  }
}