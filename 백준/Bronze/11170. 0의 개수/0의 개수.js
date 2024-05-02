const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const answer = input.map((v) => {
  let [n, m] = v.trim().split(' ').map(Number);
  return countZero(n, m);
});


function countZero(n, m) {
  let count = 0;
  
  for (let i = n; i <= m; i++) {
    i = i.toString();
    if (!i.includes('0')) continue;
    
    const removeZero = i.toString().replaceAll('0', '').length;
    count += i.toString().length - removeZero;
  }
  
  return count;
}

console.log(answer.join('\n'));