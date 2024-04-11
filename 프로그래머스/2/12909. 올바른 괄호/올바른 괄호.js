function solution(s) {
    let balance = 0;
  
    for (const char of s) {
        if (char === '(') {
            balance += 1;
        } else if (char === ')') {
            balance -= 1;
        }
      
        if (balance < 0) {
            return false;
        }
    }

    return balance === 0;
}
