const each = require('jest-each').default;

const { getLargest, getSmallest, fizzBuzz } = require("../numberFunctions");


describe("getLargest", () => {

    test("It is a function", () => {
        expect(typeof getLargest).toBe("function");
    })
    
    describe ("It reports invalid inputs correctly", () => {
        test("It throws an error if one of the three inputs is undefined", () => {
            expect(() => {
                getLargest(1, 2)
            }).toThrow("Error: all inputs must have a value")
        })
    })
    

    describe("It handles normal inputs successfully", () => {

        each([
            [[1, 2, 3], 3],
            [[9, 8, 7], 9],
            [[12, 36, 19], 36]
        ]).test("%s -> %s", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected);
        })
    })
    
})

describe("getSmallest", () => {

    test("It is a function", () => {
        expect(typeof getSmallest).toBe("function");
    })

    describe("It reports invalid inputs correctly", () => {
        test("It throws an error if one of the three inputs is undefined", () => {
            expect(() => {
                getSmallest(1, 2)
            }).toThrow("Error: all inputs must have a value")
        })
    })
    
    describe("It handles normal inputs successfully", () => {

        each([
            [[1, 2, 3], 1],
            [[9, 8, 7], 7],
            [[12, 36, 19], 12]
        ]).test("%s -> %s", (arr, expected) => {
            expect(getSmallest(...arr)).toEqual(expected);
        })
    })
    
})

describe("fizzBuzz", () => {

    test("It is a function", () => {
        expect(typeof fizzBuzz).toBe("function");
    })
    
    describe ("It reports invalid inputs correctly", () => {
        test("It throws an error if the input is invalid", () => {
            expect(() => {
                fizzBuzz("NaN")
            }).toThrow("Error: input must be a number")
        })
    })
    

    describe("It handles normal inputs successfully", () => {

        each([
            [[15], "FizzBuzz"],
            [[3], "Fizz"],
            [[5], "Buzz"],
            [[2], 2],
            [[7], 7]
        ]).test("%s -> %s", (arr, expected) => {
            expect(fizzBuzz(...arr)).toEqual(expected);
        })
    })
    
})


