const each = require('jest-each').default;

const getLargest = require("../getLargest");

describe("getLargest", () => {

    test("It is a function", () => {
        expect(typeof getLargest).toBe("function");
    })
    
    describe("It handles normal inputs successfully", () => {

        each([
            [[1, 2, 3], 3],
            [[9, 8, 7], 9],
            [[12, 36, 19], 36]
        ]).test("", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected);
        })
    })
    
})


