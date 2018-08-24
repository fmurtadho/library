var data = 'X0X0XXX0XXOX0X0X'
var count = 0
var result = []
var dataF = Math.sqrt(data.length)

for(var i = 0 ; i < dataF ; i++){
    result.push([])

    for(var j = 0 ; j < dataF ; j++){
        result[i].push(data[count])
        count = count + 1
    }

}

console.log(result)