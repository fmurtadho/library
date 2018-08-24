function factorial ( num ) {
    var result = 1

    for ( var i = 5 ; i > 0 ; i --){
        result = result * i
    }

    return result
}

console.log(factorial(5)) //120


function factorial ( num ) {
    //1. Base Case
    console.log ( num, ' =================')
    if ( num === 1) {
        return 1
    }else {
    //2. harus ada paramter yang bisa dipotong / diperkecil value nya
    var modifNum = num - 1
    return num * factorial(modifNum)
    }
}


/*
factorial(5)
    return factorial(4)
        return factorial (3)
            return factorial (2)
                return factorial (1) //num udah jadi 1
                    return 1
*/

