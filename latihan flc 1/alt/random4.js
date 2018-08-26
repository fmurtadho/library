// function filterVocal (str){
//     var result = ''
    
//     for ( var i = 0 ; i < str.length ; i ++){
//         if( str [i] !== 'a' && str[i] !=='i' && str[i] !=='u' && str[i] !=='e' && str[i] !=='o'){
//             result = result + str[i]
//         }
//     }


//     return result
// }


function filterVocal (str){
    if (str.length === 1){
        return str
    }else {
        var kata = str[0]
        var modifStr = str.substring(1)
        if( kata !== 'a'&& kata !== 'i' && kata !== 'u'&& kata !== 'e'&& kata !== 'o'){
            return kata + filterVocal(modifStr)
        }

        return '' + filterVocal(modifStr)
    }
}

console.log(filterVocal('abcdefghij')) // bcdfghj


/*
filterVocal ('abcdefghij')


filterVocal('cakti')
    kata = 'c'
    modifStr = 'akti'
    //validasi apakah dia a i u e o atau bukan
    return 'c' + filterVocal('akti')
        kata = 'a'
        modifStr = 'kti'
        return '' + filterVocal ('kti')
            kata = 'k'
            modifStr = 'ti'
            return 'k' + filterVocal('ti')
                kata = 't'
                modifStr = 'i'
                return 't'+filtervocal ('i')

*/