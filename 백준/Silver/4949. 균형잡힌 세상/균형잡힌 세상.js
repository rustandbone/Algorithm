const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.pop();

input.forEach((v) => {
  const regex = /[^\(\)\[\]]/g;
  v = v.replace(regex, '');
  while (v.includes('()') || v.includes('[]')) {
    v = v.replace('()', '').replace('[]', '');
  }
  v.length > 0 ? console.log('no') : console.log('yes');
});