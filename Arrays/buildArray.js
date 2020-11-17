class MyArray {
  // initial function that will be run
  constructor() {
    // how many items the array has 
    this.length = 0;
    // this will hold the items data
    this.data = {};
  }

  get(index) { 
    // return the data at an index
    return this.data[index]
  }

  push(item) {
    // this will add the data at the current length of array 
    this.data[this.length] = item
    // because we want to keep adding items --> increment the length when new items are added
    this.length++
    return this.length
  }

  pop() {
    // get the last item in the data
    const lastItem = this.data[this.length - 1]
    // delete the last item 
    delete this.data[this.length - 1]
    // decrease the length of the data
    this.length--
    // return the item deleted 
    return lastItem
  }

  delete(index) {
    const item = this.data[index]
    // create a new method 
    this.shiftItems(index)
  }

  shiftItems(index) {
    // loop through the data using the current index (starting index to delete) and iterate unit the end (length - 1)
    for (let i = index; i < this.length - 1; i++) {
      // the current data at each index 
      // add the new data at index +1
      // [0, 2]
      // [2]
      this.data[i] = this.data[i + 1]
    }
    // delete the last item because we shifted indexes 
    delete this.data[this.length - 1]
    // decrement the length 
    this.length--
  }
}

const newArray = new MyArray();
console.log(newArray)
newArray.push('hi')
console.log(newArray)
newArray.push('you')
console.log(newArray)
newArray.pop()
console.log(newArray)
newArray.pop()
console.log(newArray)
// newArray.delete(0)
// console.log(newArray)
