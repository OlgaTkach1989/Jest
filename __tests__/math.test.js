import {describe, test, expect} from "vitest";

// CommonJS Syntax
//const { add, divide, hello } = require('../src/math');
// ES6 Syntax
import { add, divide } from '../src/math';

describe("Math functions", () => {
     test("add sums up two numbers", () => {
        expect(add(2,3)).toBe(5);
        expect(add(3,6)).toBe(9);
     });
     test("divides two numbers correct", () => {
        expect(divide(15,3)).toBe(5);
        expect(divide(99,3)).toBe(33);
     });
     test("divide fails for dividing with 0", () => {
        expect(() => divide(6,0)).toThrow("Division by zero not allowed");
     });
});

