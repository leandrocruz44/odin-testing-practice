const letterIndex = {
    lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
} 

function goAround(x) {
    if (x >= 0 && x <= 25) {
        return x
    } else if (x > 25) {
        return goAround(x - 26)
    } else if (x < 0) {
        return goAround(x + 26)
    }
}

function changeIndex(letter, shift) {
    let index = 0
    let letterCase = ''
    
    if (letter === letter.toLowerCase()) {
        index = letterIndex['lower'].findIndex(index => { return index === letter })
        letterCase = 'lower'
    } else {
        index = letterIndex['upper'].findIndex(index => { return index === letter })
        letterCase = 'upper'
    }

    let encrypt = goAround(index + shift)

    return letterIndex[letterCase][encrypt]
}

function caesarCypher(string, shift) {
    if (string.length === 0) return "It's empty"
    let encrypted = []
    for (let i = 0; i < string.length; i++) {
        encrypted.push(changeIndex(string[i], shift))
    }
    return encrypted.join('')
}

module.exports = caesarCypher