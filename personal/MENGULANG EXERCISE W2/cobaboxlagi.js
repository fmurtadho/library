
var input = 10
var mid = Math.ceil(input/5)
var output =''

for(i=1;i<=input;i++){

    for(j=1;j<=input;j++){

        output += j
    }
    if(input % 2 == 0) {

        for(k=input-1;k>0;k--){

            output +=k
        }
    }else {
        
        for(l=input;l>0;l--){

            output +=l
        }
    } output += '\n'
    }

console.log(output)