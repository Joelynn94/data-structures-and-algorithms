// 1. Care about the worst case senario first

const large = new Array(10000).fill('nemo');
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo2(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break; // add a break to exit the loop once found
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}
findNemo2(everyone)
findNemo2(large) // O(n) --> Linear Time
findNemo2(large) // O(10000) --> Linear Time
// O(n) simple means - the big O depends on how many inputs. The number of operations increase linearly with it

// performance.now() comes built into the browser