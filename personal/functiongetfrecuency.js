//function xo(str) {
   
  
  
  function getFrequency(string) {

    var freq = {};

    for (var i=0; i<string.length;i++) {

        var character = string.charAt(i);

        if (freq[character]) {

           freq[character]++;

        } else {

           freq[character] = 1;
           
        }
    }

    return freq;
};
  
console.log(getFrequency('xtcxxx'))
  
  
  
  
  
  /* TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true*/