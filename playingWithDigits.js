function digPow(n, p){
    let strNumbers = n.toString();

    let result = 0;
    for(let i = 0; i < strNumbers.length; i++) {
        result += Math.pow(parseInt(strNumbers[i]), p);
        p++;
    }

    return (result >= n)&&(result%n == 0) ? result/n : -1;
}

console.log(digPow(695, 2));
console.log(digPow(89, 1));
console.log(digPow(3, 1));