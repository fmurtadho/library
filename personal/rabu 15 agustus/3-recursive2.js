function balikKata ( str ){
    //cara looping ----------------------------------
    // var result = ''
    // for ( var i = str.length - 1 ; i >= 0 ; i --){
    //     result = result + str[i]
    // }

    // return result

    //------------------------------------------------

    //1.Base Case
    if ( str.length === 1) {
        return str
    }else {
    //2. Parameter yang diperkecil adalah string dimana huruf terakhirnya dibuang
        var kata = str[str.length-1];    

        var newStr = str.substring(0, str.length-1);
        
        return kata + balikKata(newStr)
    }

}

var balik_kata = balikKata('hello')

console.log(balik_kata)



/*
balikKata (' hello')
    kata = 'o'
    newStr = 'hell'
    return 'o' + balikKata ('hell')
            kata = 'l'
            newStr = 'hel'
            return 'l' + balikKata ('hel')
                kata = 'l'
                newStr = 'he'
                return 'l' + balikKata ('he')
                    kata = 'e'
                    newStr = 'h'
                    return 'e' + balikKata ('eh') // karena length nya sudah 1 maka balik lagi ke atas sampai jadi elloh
*/