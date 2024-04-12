const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

input.forEach((v) => {
  v = v.trim();
  while (v.includes('()')) v = v.replaceAll('()', '');
  v.length === 0 ? console.log('YES') : console.log('NO');
});