function reverse(str){
  // check input 
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'This is invalid'
  }
  // reverse array 
  const reversedArray = []
  const totalItems = str.length - 1

  // loop through the totalItems unitl i is > || = to 0; decerement by 1
  for (let i = totalItems; i >= 0; i--) {
    // push each item to the reversedArray
    reversedArray.push(str[i])
  }

  console.log(reversedArray)
  // return the reversed array
  return reversedArray.join('') 
}

reverse('Hi my name is Joe')

// more modern, simpler way 
function reverse2(str) {
  return str.split('').reverse().join('')
}

reverse2('Hi my name is Joe')

// the one-liner
const reverse3 = str => [...str].reverse().join('')

reverse3('Hi my name is Joe')