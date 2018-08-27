function LongestWord(str){
    
    var split = str.split(' ')
    console.log(split)

    var longest;

    for ( var i = 0 ; i < split.length ; i++ ){
        let current = split[i]
        let reg = current.match(/[A-Za-z]/g).join()

        console.log(reg)
    }

    
    
}




console.log(LongestWord("fun&!! time"))
  