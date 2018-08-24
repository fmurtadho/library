// function jarakRec (str, find){

//     if(str.length === 0 ){
//         return str
//     }else{
//        var kata=str[0]
//        var modifStr = str.substring(1)

//        if(kata !== find){
//            return kata + jarakRec(modifStr)
//        }

//     }
// }

function jarakRec (str, letter){
    var huruf = str[0]
    if(huruf === letter){
        return 1
    }else {
        var modifStr = str.substring(1)
        return 1 + jarakRec(modifStr, letter)
    }

}

console.log(jarakRec('12104123','1')); //1
console.log(jarakRec('the quick brown fox', 'o')); //13
console.log(jarakRec('hahaha','a')); //2