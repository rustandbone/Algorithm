const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split(' ');

const [month, date] = input;

const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const day = new Date(`2007-${month}-${date}`).getDay();

console.log(dayOfWeek[day]);