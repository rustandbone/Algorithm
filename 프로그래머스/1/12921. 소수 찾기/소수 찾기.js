function solution(n) {
    let prime = new Array(n + 1).fill(true);
    prime[0] = false;
    prime[1] = false; 

    for (let i = 2; i * i <= n; i++) {
        if (prime[i]) {
            for (let j = i * i; j <= n; j += i) {
                prime[j] = false;
            }
        }
    }

    return prime.filter(v => v).length;
}