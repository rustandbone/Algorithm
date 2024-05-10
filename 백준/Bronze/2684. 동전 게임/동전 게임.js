const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

input.forEach((coinFlip) => {
  const coinCase = {
    TTT: 0,
    TTH: 0,
    THT: 0,
    THH: 0,
    HTT: 0,
    HTH: 0,
    HHT: 0,
    HHH: 0,
  };

  const arrFlip = coinFlip.trim().split('');

  for (let i = 0; i < arrFlip.length - 2; i++) {
    const flip = arrFlip.slice(i, i + 3).join('');
    if (coinCase[flip] !== undefined) coinCase[flip]++;
  }

  console.log(Object.values(coinCase).join(' '));
});