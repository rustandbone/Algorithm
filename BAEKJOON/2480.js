const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const diceNumbers = new Set(input);

if (diceNumbers.size === 3) {
  return console.log(Math.max(...input) * 100);
}

if (diceNumbers.size === 2) {
  const diceDuplNumber = [
    ...new Set(input.filter((item, index) => input.indexOf(item) !== index)),
  ];

  return console.log(1000 + diceDuplNumber[0] * 100);
}

if (diceNumbers.size === 1) {
  return console.log(10000 + input[0] * 1000);
}
