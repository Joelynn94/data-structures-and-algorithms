const strings = ['a', 'b', 'c', 'd']
// 4 items * 4 shelves = 16 bytes of storage 

// push (add)
strings.push('e') // O(1) --> can also be liner time O(n)
console.log(strings)

// pop (remove)
strings.pop() // O(1)
console.log(strings)

// unshift (add to beginning of array)
strings.unshift('x') // O(n) --> looping 
console.log(strings)

// splice (add anywhere in array)
strings.splice(2, 0, 'y') // O(n/2) --> O(n)
console.log(strings)

// C++
// int a[20]
// int b[5] {1,2,3,4,5}


