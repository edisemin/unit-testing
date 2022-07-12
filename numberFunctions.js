const getLargest = (a, b, c) => {
    if (a && b && c) {
    return Math.max(a, b, c);
    } else {
        throw 'Error: bad input';
    }
}

// console.log(getLargest(2, 6, 9));
// console.log(getLargest(2, 16, 9));

const getSmallest = (a, b, c) => {
    if (a && b && c) {
    return Math.min(a, b, c);
    } else {
        throw 'Error: bad input';
    }
}

const fizzBuzz = (num) => {
    if (num % 15 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

// Export function 

module.exports = {
    getLargest,
    getSmallest,
    fizzBuzz
}
