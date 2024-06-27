import { describe, test, it, expect } from "vitest"
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    });

    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2);
    });

    it('should return the first argument if arguments are equal', () => {
        expect(max(2, 2)).toBe(2);
    });
})

describe('fizzBuzz', () => {
    it('should return FizzBuzz if the argument is devisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it('should return Fizz if the argument is only devisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    })
    it('should return Buzz if the argument is only devisible by 5', () => {
        expect(fizzBuzz(25)).toBe('Buzz');
    })
    it('should return argument if the argument is not devisible by 3 or/and 5', () => {
        expect(fizzBuzz(7)).toBe('7');
    })
})

describe('calculateAverage', () => {
    it('should return NAN if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    })
    it('should calculate the average of an array with single element', () => {
        expect(calculateAverage([1])).toBe(1);
    })
    it('should calculate the average of an array with two element', () => {
        expect(calculateAverage([1, 2])).toBe(1.5);
    })
    it('should calculate the average of an array with three element', () => {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    })
})

describe('factorial', () => {
    it('should return 1 if given 0', () => {
        expect(factorial(0)).toBe(1)
    })
    it('should return 1 if given 1', () => {
        expect(factorial(1)).toBe(1)
    })
    it('should return 2 if given 2', () => {
        expect(factorial(2)).toBe(2)
    })
    it('should return 6 if given 3', () => {
        expect(factorial(3)).toBe(6)
    })
    it('should return 24 if given 4', () => {
        expect(factorial(4)).toBe(24)
    })
    it('should return undefinea if given negative number', () => {
        expect(factorial(-4)).toBe(undefined)
    })
})