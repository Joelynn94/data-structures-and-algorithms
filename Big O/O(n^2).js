// Log all pairs of array
const boxes = ['a','b','c','d','e']

function logAllPairsOfArray(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsOfArray(boxes)

// if you have nested loops, we use multiplication to find the Big O
// O(n^2) --> Quadratic Time --> O of n squared