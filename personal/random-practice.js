function mybox(input) {
let mid = Math.ceil(input/2)
let output = ''
for(i=1;i<=input;i++){

    for(j=1;j<=mid;j++) {
        output += j
    }
    if(input % 2 ==0) {

        for(k=mid;k>0;k--){
            output += k
        }
    }else {

        for(l=mid-1;l>0;l--){
            output += l
        }
    }
    output += '\n'   
}
return output
}

console.log(mybox(5))