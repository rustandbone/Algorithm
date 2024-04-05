const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.trim());

const [n, m] = input[0].split(' ').map(Number);

const pokemonMap = {};
const pokemon = input.slice(1, n + 1);
const question = input.slice(n + 1);

pokemon.forEach((pokemon, i) => {
  pokemonMap[pokemon] = i + 1;
});

console.log(
  question
    .map((v) => {
      if (!isNaN(+v)) {
        return pokemon[+v - 1];
      } else {
        return pokemonMap[v.trim()];
      }
    })
    .join('\n')
);