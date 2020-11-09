// 2. Remove constants

function printFirstItemThenFirstHalf(items) {
    console.log(items[0]) // log the first tiem in array

    let middleIndex = Math.floor(items.length / 2) // find the middle index
    let index = 0

    // As long as the middle index is greater than 0
    while (index < middleIndex) {
        console.log(items[index]) // log the items (first half of item list)
        index++ // increase by 1 each loop
    }

    for(let i = 0; i < 100; i++) {
        console.log('hi')
    }
}

O(1 + n/2 + 100)
O(n/2 + 101)
O(n/2 + 1)
O(n + 1)
O(n)

function compressBoxesTwice(boxes) {
    boxes.forEach(function(box) {
        console.log(box)
    })

    boxes.forEach(function(box) {
        console.log(box)
    })
}

O(2n)
O(n)