const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const winningSpr = {
  S: 'R',
  P: 'S',
  R: 'P',
};

const self = input[1].trim();
const opponent = input.slice(3).map((v) => v.trim());
const [initialPoint, best] = calResult(self);
const maxPoint = calResult(getBest(best))[0];

console.log(initialPoint + '\n' + maxPoint);

function calResult(self) {
  let result = 0;
  let sortArr = new Array(self.length).fill('');

  opponent.forEach((v) => {
    v.split('').forEach((el, i) => {
      sortArr[i] += el;

      if (winningSpr[el] === self[i]) result += 2;
      else if (winningSpr[el] === winningSpr[self[i]]) result += 1;
    });
  });

  return [result, sortArr];
}

function getBest(arr) {
  let best = '';

  arr.forEach((v) => {
    const spr = ['S', 'P', 'R'];
    let pointCheck = {};

    spr.forEach((el) => {
      for (let i = 0; i < v.length; i++) {
        if (winningSpr[v[i]] === el) pointCheck[el] = (pointCheck[el] || 0) + 2;
        else if (winningSpr[v[i]] === winningSpr[el])
          pointCheck[el] = (pointCheck[el] || 0) + 1;
      }
    });

    const sort = Object.entries(pointCheck).sort((a, b) =>
      b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1]
    );

    best += sort[0][0];
  });

  return best;
}