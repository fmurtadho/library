/*
[ 
    ['M','O','O','O'],
    ['O','K','O','R'],
    ['O','M','O','M'],
    ['O','M','O','O']

*/
    var data = 'MOOOOKOROMOMOMOO'
    var result = []
    var count = 0
    for(var i = 0; i< 4; i++ ) {
        result.push([])

        for (var j = 0; j < 4; j++){
        result[i].push(data[count])
        count = count + 1
    
        }
    
    }
    console.log(result)
