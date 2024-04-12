const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const GCE = {
  NLCS: 'North London Collegiate School',
  BHA: 'Branksome Hall Asia',
  KIS: 'Korea International School',
  SJA: 'St. Johnsbury Academy',
};

console.log(GCE[input]);