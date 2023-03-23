function analyzeArray(array) {
    const length = array.length
    const average = array.reduce((prev, cur) =>  prev + cur, 0)/length
    const max = Math.max(...array)
    const min = Math.min(...array)

    return { average, min, max, length }
}

console.log(analyzeArray([2, 4, 5, 6, 7, 90, 1, 11, 34]))

module.exports = analyzeArray