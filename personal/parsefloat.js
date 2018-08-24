function xo(word) {

    var countX = 0;
    var countO = 0;
    
     for (i = 0; i < word.length; i++) {
        
        if (word[i] == 'x') {

            countX++;
        }
        else if(word[i] == 'o') {

            countO++;
        }
    
   }
   if(parseFloat(countX)==parseFloat(countO)){
    return true

   }else {
    return false
   }

 }

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true