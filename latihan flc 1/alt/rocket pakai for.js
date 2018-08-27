/*
Buatlah pola bilangan berikut menggunakan rekursif,
function nya satu, parameter 1

54321
5432
543
54
5

321
32 
3

1
*/

function pattern (parameter){
    
    if(parameter.length < 1){
        return ''
    }

    if(typeof parameter == "number"){
        var temp = ''
        for ( var i = parameter ; i > 0; i--){
            temp = temp + i.toString()
        }
    }else{
        temp = parameter;
    }

    return temp + '\n' + pattern(temp.substring(0,temp.length-1))

}

console.log(pattern(5))
console.log(pattern(3))
console.log(pattern(1))