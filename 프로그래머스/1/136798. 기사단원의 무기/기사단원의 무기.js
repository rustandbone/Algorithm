function solution(number, limit, power) {
    let answer = 0;
    
    for(let i = 1; i <= number; i++) {
        const eachPower = getDivisorCount(i)
        if(eachPower <= limit) answer += eachPower;
        else answer += power;
    }
    
    return answer;
}

function getDivisorCount(num) {
    let count = 0;
    for(let i = 1; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            if(i === num / i) count += 1;
            else count += 2;
        }
    }
    return count;
}