/*

Buatlah pola bilangan berikut menggunakan rekursif,
buat function

54321
5432
543
54
5


321
32 
3

*/

// function pattern(num){
    
//     var output = ''

//     for ( var i = 0 ; i < num ; i ++){

//         for ( var j = num ; j > i ; j --){

//             output = output + j
//         }
//         output = output + '\n'
//     }
//     return output   
// }

// console.log(pattern(5));


function patternR(num){
    if(num < 1){
        return ''
    }else{
        var modifNum = num - 1
        var kata = ''

        function random(num){
            if(num < 1){
                return kata
            }
            kata = kata + num
            return random(num-1)
        }

        var what = random(num)
        return what + '\n' + patternR(modifNum)
    }
}
console.log(patternR(5))
