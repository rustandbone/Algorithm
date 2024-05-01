const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const spr = {
  S: 'R',
  P: 'S',
  R: 'P',
};

const self = input[1].trim();
const opponent = input.slice(3).map((v) => v.trim());
const best = getBest(calResult(self)[1]);

console.log(calResult(self)[0]);
console.log(calResult(best)[0]);

function calResult(self) {
  let result = 0;
  let bestArr = new Array(self.length).fill('');

  opponent.forEach((v) => {
    v.split('').forEach((el, i) => {
      bestArr[i] += el;

      if (spr[el] === self[i]) result += 2;
      else if (spr[el] === spr[self[i]]) result += 1;
    });
  });

  return [result, bestArr];
}

function getBest(arr) {
  let best = '';

  arr.forEach((v) => {
    const s = ['S', 'P', 'R'];
    let obj = {};

    s.forEach((el) => {
      for (let i = 0; i < v.length; i++) {
        if (spr[v[i]] === el) obj[el] = (obj[el] || 0) + 2;
        else if (spr[v[i]] === spr[el]) obj[el] = (obj[el] || 0) + 1;
      }
    });

    const sort = Object.entries(obj).sort((a, b) =>
      b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1]
    );

    best += sort[0][0];
  });
  return best;
}