const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const winUniv = [];

input.forEach((v, i) => {
  if (!isNaN(v)) {
    const arr = input.slice(i + 1, i + +v + 1);
    let univCheck = {};

    arr.forEach((el) => {
      const [univ, alcohol] = el.split(' ');
      univCheck[univ] = alcohol;
    });

    winUniv.push(Object.entries(univCheck).sort((a, b) => b[1] - a[1])[0][0]);
  }
});

console.log(winUniv.join('\n'));