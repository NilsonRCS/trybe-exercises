const { expect, test } = require('@jest/globals');
const sum = require('./sum');

describe('sum', () => {
    test('4 + 5 igual 9', () => {
        expect(sum(4, 5)).toBe(9);
    })

    test('0 + 0 igual 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    test('testa função lança erro com string', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow();
    })

    test('error message is "parameters must be numbers"', () =>{
        expect(() => {
            sum(4, '5');
        }).toThrow(/parameters must be numbers/);
    })
})
