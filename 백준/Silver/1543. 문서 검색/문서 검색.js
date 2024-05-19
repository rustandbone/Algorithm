const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

let [doc, word] = input.map((v) => v.trim());
let count = 0;

while (doc.includes(word)) {
  doc = doc.replace(word, ' ');
  count++;
}

console.log(count);