// Question: Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

// 1. write down key points:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//-----------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters (or 2 inputs) -> arrays -> with no size limit
// return true or false 

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; i < arr2.length; i++) {
      if(arr1[i] === arr2[j]) {
        return true
      }
    }
  }
  return false
}

// Brute force: Nested for loops (because we are comparing) -> O(a * b)
// O(1) -> Space complexity 
containsCommonItem(array1, array2)


// =======
// A better way to solve with a better time complexity
// =======

// array1 => object {
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }
// array2[index] === object.properties 

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in array 
  let map = {}
  for(let i = 0; i < arr1.length; i++) {
    // if checks need to evaluate to true to execute
    if(!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true
      // {
      //   a: true
      // }
    }
  }
  console.log(map)
  // loop through second array and check if item in second array exists in created object
  for(let j = 0; j < arr2.length; j++) {
    if(map[arr2[j]]) {
      return true
    }
  }
}

// O(a + b) Time complexity is better for larger inputs than the first solution
// O(a) -> Space complexity -> we are creating variables and an object data structure
containsCommonItem2(array1, array2)

// write units tests and check for errors if there is time in the interviewer 


// a more readable version using es6
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1, array2)