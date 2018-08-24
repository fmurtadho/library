/*
[ 
    ['M','O','O','O'],
    ['O','K','O','R'],
    ['O','M','O','M'],
    ['O','M','O','O']

*/
var data = 'MOOOOKOROMOMOMOO'

var output = []
var counter = 0 ;
var limit = Math.sqrt(data.length)

for (var i = 0 ; i < limit ; i ++){
    output.push([])

    for(var j = 0 ; j < limit ; j ++){
        output[i].push(data[counter])
        counter = counter + 1
    }

}
console.log(output)