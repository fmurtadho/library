function calculateMultiply(num1,num2) {
    return num1*num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

function boxModel(input) {
    var output =''
    var mid=Math.ceil(input/2);
    for(i=1; i<=input; i++) {
    
      for(j=1; j<=input; j++) {
    
        output += j
    
      }
    
      if(input % 2 == 0) {
        for(k=j-2; k>0; k--) {
    
          output +=k
        }
    
      }else {
        for(l=j-1; l>0; l--) {
    
          output +=l
        }
      }
      
      output += '\n' 
      
      }
    

    return output
}

console.log(boxModel(10))