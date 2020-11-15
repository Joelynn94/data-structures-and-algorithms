// The heap - is usually where we store values (variables) 
// The stack - where we keep track all of our function calls 

function boo(n) {
  for(let i = 0; i < n.length; i++) {
      console.log('Boo!')
  }
}

boo([1,2,3,4,5]) // O(1) --> because we aren't creating much memory here other than the variable assignment 

// when it comes to measuring the space complextiy, we don't need to care how big the input is (in this specific case)


function arrayOfNTimes(n) {
  let hiArray = []
  for(let i = 0; i < n; i++) {
      hiArray[i] = 'hi'
  }
  return hiArray
}

arrayOfNTimes(6) // O(n) --> we created a new data structure (the hiArray) and adding memory to the array (new items are being added)
