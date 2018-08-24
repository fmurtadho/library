function diamond(input){
    var output = '';
    for(var i = 1; i < input; i++){
        for(var j = input-1; j >= i; j--){
            output += ' ';
        }

        for(var k = 1; k < i*2; k++){
            output += '*';
        }
        output += '\n';
    }

    for(var i = input; i > 0; i--){
        for(var j = input; j > i; j--){
            output += ' ';
        }

        for(var k = 1; k < i*2; k++){
            output += '*';
        }
        output += '\n';
    }

    console.log(output);
} 

diamond(12);