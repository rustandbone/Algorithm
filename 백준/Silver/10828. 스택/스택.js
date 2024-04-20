const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const stack = new Array();

const answer = input.map((v) => {
  v = v.trim();

  if (v.includes('push')) {
    const [, num] = v.split(' ');
    push(stack, num);
  }

  switch (v) {
    case 'pop':
      return pop(stack);
    case 'size':
      return size(stack);
    case 'empty':
      return empty(stack);
    case 'top':
      return top(stack);
  }
});

console.log(answer.filter((v) => v !== undefined).join('\n'));

function push(arr, num) {
  arr.push(num);
}

function pop(arr) {
  return arr.length === 0 ? -1 : arr.pop();
}

function size(arr) {
  return arr.length;
}

function empty(arr) {
  return arr.length === 0 ? 1 : 0;
}

function top(arr) {
  return arr.length === 0 ? -1 : arr.at(-1);
}