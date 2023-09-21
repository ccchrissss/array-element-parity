function solve(arr){

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] * -1) == false) {
      return arr[i]
    } 
  }

};

console.log(solve([4, -4, 2, 3, -3, 2]))

// parameter: arr   // contains integers with matching positive and negative values
// return: integer that does not have a matching positive or negative value
// e.g. solve([4, -4, 2, 3, -3, 2])
// results in 2

// for loop initialized at 0
// if array does not include e * -1, return arr[i]