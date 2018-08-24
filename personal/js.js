/*var l = 10;
var row = '';
for( var i=1;i<=l;i++){
  for(j=1;j<=l;j++) {
    row += j;
  }row += '\n';
}
console.log(row)*/

var input = 5;
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
console.log(output);