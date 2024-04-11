const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim();

const numbers = Array.from({ length: input }, (_, i) => i + 1);

let index = 0;

while (numbers.length > index) {
  if (index % 2 === 1) {
    numbers.push(numbers[index]);
  }
  index++;
}

console.log(numbers.at(-1));
