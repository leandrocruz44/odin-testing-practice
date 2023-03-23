function capitalize(word) {
    const cap = word[0].toUpperCase()
    return cap + word.slice(1)
}

module.exports = capitalize