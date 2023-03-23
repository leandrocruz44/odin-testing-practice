const caesarCypher = require('./caesar-cypher')

describe('Caesar Cypher', () => {
    test('Encrypt a word with shift 5', () =>
        expect(caesarCypher('palmeiras', 5)).toBe('ufqrjnwfx')
    )

    test('Encrypt a word with shift 0', () => 
        expect(caesarCypher('beatles', 0)).toBe('beatles')
    )

    test('Encrypt a word with a negative shift', () => 
        expect(caesarCypher('masayoshi', -6)).toBe('gumusimbc')
    )

    test('Encrypt a word with a large shift', () => 
        expect(caesarCypher('lambreta', 89)).toBe('wlxmcpel')
    )

    test('Encrypt a word with upper and lower cases', () => 
        expect(caesarCypher('AbuBle', 1)).toBe('BcvCmf')
    )

    test('Check if there the field is empty', () =>
        expect(caesarCypher('', 5)).toBe("It's empty")
    )
})
