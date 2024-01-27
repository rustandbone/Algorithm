const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

let word = input;
let count = 0;

const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

function checkCroatian(str) {
  if (word.includes(str)) {
    word = word.replace(str, ' ');
    count++;
    checkCroatian(str);
  } else {
    return;
  }
}

croatian.map((v) => {
  checkCroatian(v);
});

word = word.split('').filter((v) => v !== ' ');

console.log(count + word.length);
