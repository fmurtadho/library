/*

Buatlah pola bilangan berikut menggunakan rekursif,
tidak usah buat function

54321
5432
543
54
5


321
32 
3

*/

function pattern(num){
    
    var output = ''

    for ( var i = 0 ; i < num ; i ++){

        for ( var j = num ; j > i ; j --){

            output = output + j
        }
        output = output + '\n'
    }
    return output   
}

console.log(pattern(5))