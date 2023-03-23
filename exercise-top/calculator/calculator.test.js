const calculator = require('./calculator')

describe('add', () => {
    test('Add 1 + 1 = 2', () => 
        expect(calculator.add(1, 1)).toBe(2)
    )

    test('Add 56 + 44 = 100', () =>
        expect(calculator.add(56, 44)).toBe(100)
    )
})

describe('subtract', () => {
    test('Subtract 1 - 1 = 0', () =>
        expect(calculator.sub(1, 1)).toBe(0)
    )

    test('Subtract 30 - 70 = -40', () =>
        expect(calculator.sub(30, 70)).toBe(-40)
    )
})

describe('multiply', () => {
    test('multiply 2 x 2 = 4', () =>
        expect(calculator.mult(2, 2)).toBe(4)
    )

    test('multiply 32 x 15 = 480', () =>
        expect(calculator.mult(32, 15)).toBe(480)
    )
})

describe('division', () => {
    test('divide 4 / 2 = 2', () =>
        expect(calculator.div(4, 2)).toBe(2)
    )

    test('divide 380 / 20 = 19', () =>
        expect(calculator.div(380, 20)).toBe(19)
    )
})