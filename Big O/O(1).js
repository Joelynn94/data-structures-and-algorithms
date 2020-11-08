function compressFirstBox(boxes) {
    console.log(boxes[0])
}

// O(1) --> Constant Time
// No matter how many inputs we have, we are always grabbing the first item in the array, in this case

const boxes = [0,1,2,3,4,5]
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0])
    console.log(boxes[1])
    console.log(boxes[3])
}

logFirstTwoBoxes(boxes) // O(3) --> which is shown as O(1) because it's a way to show constant time