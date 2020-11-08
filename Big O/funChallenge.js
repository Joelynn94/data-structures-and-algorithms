// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n) --> loops are linear time, they depend on the length on the input
    anotherFunction(); // O(n) --> depends on the amount of inputs 
    let stranger = true; // O(n) --> depends on the amount of inputs 
    a++; // O(n) --> depends on the amount of inputs 
  }
  return a; // O(1)
}

funChallenge()

// O(3 steps + 4n) 
// O(3 + 4n)
// O(n)