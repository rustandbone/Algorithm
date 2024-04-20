const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const participant = input.map((v) => v.split(' '));

const TeamName1 = participant
  .sort((a, b) => (a[1] % 100) - (b[1] % 100))
  .map((v) => v[1] % 100);
const TeamName2 = participant.sort((a, b) => b[0] - a[0]).map((v) => v[2][0]);

console.log(TeamName1.join('') + '\n' + TeamName2.join(''));