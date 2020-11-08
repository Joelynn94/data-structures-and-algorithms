const large = new Array(10000).fill('nemo');

function findNemo2(fish) {
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(large) // O(n) --> Linear Time
findNemo2(large) // O(10000) --> Linear Time
// O(n) simple means - the big O depends on how many inputs. The number of operations increase linearly with it

// performance.now() comes built into the browser