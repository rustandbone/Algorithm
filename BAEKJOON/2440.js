const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

for (let i = input; i > 0; i--) {
  console.log('*'.repeat(i));
}
