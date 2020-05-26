//Addition Function
function add(x, y) {
    return x + y;
}

//Multiplication Function
function multiply(x, y) {
    let product = 0;
    for (let counter = 0; counter < y; counter = add(counter, 1)) {
        product = add(product, x);
    }
    return product;
}

//Exponential Function
function exponential(x, n) {
    if (n === 0) {
        return 1
    }
    let baseNum = x;
    for (let counter = 1; counter < n; counter = add(counter, 1)) {
        baseNum = multiply(baseNum, x);
    }
    let total = baseNum;
    return total;
}

//Factorial Function
function factorial(n) {
    let currentTotal = 1;
    for ( let counter = 1; counter <= n; counter = add(counter, 1)) {
        let currentMultiplicand = counter;
        currentTotal = multiply(currentTotal, currentMultiplicand);
    }
    return currentTotal;
}

//Fibonacci Function 
function fibonacci(n) {
    let fiboArray = [0, 1];
    for (let counter = 2; counter < n; counter = add(counter, 1)) {
        let currentNumber = add(fiboArray[add(counter, (-2))], fiboArray[add(counter, (-1))]);
        fiboArray.push(currentNumber);
    }
    return fiboArray[add(n, (-1))];
}