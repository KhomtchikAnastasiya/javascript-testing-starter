import { describe, test, it, expect } from "vitest"
import { fizzBuzz, max } from "../src/intro";

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