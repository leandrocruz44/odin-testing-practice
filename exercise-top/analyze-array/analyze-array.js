function analyzeArray(array) {
    const length = array.length
    const average = array.reduce((prev, cur) =>  prev + cur, 0)/length
    const max = Math.max(...array)
    const min = Math.min(...array)

    return { average, min, max, length }
}

module.exports = analyzeArray