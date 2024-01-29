const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const gradeCard = input.map((v) => {
  if (v.includes('\r')) return v.replace('\r', '');
  else return v;
});

const grade = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalGrade = 0;

const eachGrade = gradeCard.reduce((acc, cur) => {
  const [, eachGrade, average] = cur.split(' ');

  if (average === 'P') {
    return acc + 0;
  }

  totalGrade += +eachGrade;
  return acc + +eachGrade * grade[average];
}, 0);

console.log((eachGrade / totalGrade).toFixed(6));
