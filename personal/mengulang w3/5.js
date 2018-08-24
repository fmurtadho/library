function palindrome(input){
    var arr1 = input.split('')
    var arr2 = []

    for( var i = input.length - 1 ; i >= 0 ; i --){
        arr2.push(input[i])
    }

    for( var j = 0 ; j < input.length ; j ++){
        if(arr1[j] !== arr2[j]){
            return false
        }else {
            return true
        }

    }
    
}

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false