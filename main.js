//Addition Function
function add(x, y) {
    return x + y;
}

//Multiplication Function
function multiply(x, y) {
    let product = 0;
    for (let counter = 0; counter < y; counter += 1) {
        product = add(product, x);
    }
    return product;
}

//Exponential Function
function exponential(x, n) {
    if (n === 0) {
        return 1
    }
    if (n < 0) {
        console.log(`I wouldn't even know how to manually start an inverse exponential function. You'd have to start with a manual division first, I guess`);
    }
    let baseNum = x;
    for (let counter = 1; counter < n; counter += 1) {
        baseNum = multiply(baseNum, x);
    }
    let total = baseNum;
    return total;
}

//Fibonacci Function 
function fibonacci(n) {
    let fiboArray = [0, 1];
    for (let counter = 2; counter < n; counter += 1) {
        let currentNumber = add(fiboArray[counter - 2], fiboArray[counter - 1])
        fiboArray.push(currentNumber);
    }
    return fiboArray[n - 1];
}