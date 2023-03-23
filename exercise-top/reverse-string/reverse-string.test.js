const reverseString = require('./reverse-string')

test('Reverse string', () => {
    expect(reverseString('word')).toBe('drow')
})