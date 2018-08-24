

var n = 10;
var lineOfStars = '';

for(var i = 1; i <= n; i++){
  
  for(var j = 1; j <= n; j++){
    
     if(j <= n - i + 1){
       
       lineOfStars += ' ' ;
       
     } else{
       
        lineOfStars += j ;
       
     }
  }
  
  lineOfStars += '\n' ;
  
}

console.log(lineOfStars);