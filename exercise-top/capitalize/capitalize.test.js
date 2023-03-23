const capitalize = require('./capitalize')

test('Capitalize word', () => {
    expect(capitalize('palmeiras')).toBe('Palmeiras')
})