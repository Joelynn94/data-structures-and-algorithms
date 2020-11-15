const large = new Array(10000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(large)

// forEach with arrow functions 
const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === 'nemo') {
      console.log('Found NEMO!')
    }
  })
}

findNemo2(large)

// for of loop with arrow function
const findNemo3 = array => {
  for (let fish of array) {
    if(fish === 'nemo') {
      console.log('Found NEMO!')
    }
  }
}

findNemo3(large)