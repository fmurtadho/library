function howManyGifts(maxBudget, gifts){
    // your code goes here
    var newArr = [];
    
    for (var i = 0; i < gifts.length; i++) {
      if (maxBudget % gifts[i] === 0) {
        newArr.push(gifts[i]);
      }
    }
    
    return Math.max(...newArr);
  }
  
  console.log(howManyGifts(20, [13, 2, 4, 6, 1])); //, 4);