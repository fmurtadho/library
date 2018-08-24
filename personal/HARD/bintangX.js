var x = '';
var rows = 7;

for(var i = 0; i < rows; i++){
    for(var j = 0; j < rows; j++){
        if(i == j || i+j == rows-1){
            x += '*';
        }else{
            x += ' ';
        }
    }
    x += '\n';
}

console.log(x);