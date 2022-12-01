function findFactorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

var n = 8;
console.log(n+'! = '+ findFactorial(n));