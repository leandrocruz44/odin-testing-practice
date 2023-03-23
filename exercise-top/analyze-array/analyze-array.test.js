const analyzeArray = require('./analyze-array')

describe('Analyze an array and return average, min, max and length', () => {
    test('[1,8,3,4,2,6]', () =>
        expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, min: 1, max: 8,length: 6 }
        )
    )

    test('[2, 4, 5, 6, 7, 90, 1, 11, 34]', () => 
        expect(analyzeArray([2,4,5,6,7,90,1,11,34])).toStrictEqual({ average: 17.77777777777778, min: 1, max: 90, length: 9 }
        )
    )
})