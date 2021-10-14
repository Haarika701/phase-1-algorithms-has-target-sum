function hasTargetSum(array, target) {
  // Write your algorithm here
  let sumArray = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j]
     // console.log(sumArray)
      sumArray.push(sum)
    }
    
    
  }
  match = sumArray.find((sum) => sum === target)
      if (match) {
        return true
      } else {
        return false
      }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  
//iterate array using for loop to check if they add up tp total  //does not have to accoount for the last element...just the seoncd last element of the arrray
// iterate second elementloop to find the value that targets the sum   //inner loop starts with the second position of the array
//check if array at index === target
//if equal return true else false
*/

/*
  Add written explanation of your solution here
  
*/
//find the pair of numbers the adds up to the given sum,in an array

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");
   
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log(" => ",hasTargetSum([2,7,11,15],9))
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
}

module.exports = hasTargetSum;
