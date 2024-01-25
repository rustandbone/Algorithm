const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

const arr = input.split('');

const alphabet = Array(26)
  .fill()
  .map((v, i) => String.fromCharCode(i + 97));

const checkAlphabet = alphabet.map((v) => arr.indexOf(v));

console.log(...checkAlphabet);
