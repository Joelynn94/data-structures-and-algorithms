// 3. Different terms for inputs

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(box) {
        console.log(box)
    })

    boxes2.forEach(function(box) {
        console.log(box)
    })
}
// since both loops are looping over different inputs, use different notation 
O(a + b)
// any step that happens in the same indentation (i.e one after another), you add+ for Big O
O(a + b)
// any step that happens in the same indentation that is nested, you multiply* for Big O
O(a * b)