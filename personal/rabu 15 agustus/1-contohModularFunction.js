function balikKata(str){
    //1.SPLIT
    var strSplit = splitKata(str)
    //2. REVERSE
    var strReverse = reverseKata(strSplit)
    //3. JOIN
    var strJoin = joinKata (strReverse)

    return strJoin

}

console.log(balikKata('Hello world and coders!'))


function splitKata (kata) {
    var resultSplit = []
    for ( var i = 0 ; i < kata.length ; i++){
        resultSplit.push(kata[i])
    }

    return resultSplit
}

function reverseKata (splitKata){

    var reverseResult = [];

    for ( var i = splitKata.length - 1 ; i >= 0 ; i--){
        reverseResult.push(splitKata[i])
    }
    return reverseResult
}


function joinKata (reverseKata) {
    var joinResult = ''
    for ( var i = 0 ; i < reverseKata.length ; i ++){
        joinResult = joinResult + reverseKata[i]
    }
    return joinResult
}