function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 0;
    } else {
        let a = 0, b = 1;
        for (let i = 2; i < num; i++) {
            let temp = a;
            a = b;
            b = temp + b;
        }
        return b;
    }
}

// Examples
console.log(fibonacci(1)); 
console.log(fibonacci(5)); 

module.exports = fibonacci;
