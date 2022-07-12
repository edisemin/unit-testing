const getLargest = (a, b, c) => {
    return Math.max(a, b, c);
}

// console.log(getLargest(2, 6, 9));
// console.log(getLargest(2, 16, 9));

const getSmallest = (a, b, c) => {
    return Math.min(a, b, c);
}

// Export function 

module.exports = getLargest;
