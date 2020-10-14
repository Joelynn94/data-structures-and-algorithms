const large = new Array(10000).fill('nemo');

function findNemo2(fish) {
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(large) // O(n) --> Linear Time
findNemo2(large) // O(10000) --> Linear Time
// the big O depends on how many inputs, the number of operations increase linearly with it