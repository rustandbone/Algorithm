const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.trim());

const [n, m] = input[0].split(' ').map(Number);

const noListened = input.slice(1, n + 1);
const noSeen = input.slice(n + 1);

const noListenedSet = new Set(noListened);
const noListenedAndSeen = noSeen.filter((v) => noListenedSet.has(v)).sort();

console.log(noListenedAndSeen.length);
console.log(noListenedAndSeen.join('\n'));
