//split

var strings = 'hello i love javascript'
//var temp = strings.split(' ')

function splitString(str, character) {
    var result = []
    var temp = ''
    for(var i = 0; i < str.length;i++){
        if(str[i] !== character){
            temp = temp + str[i]
        }else {
            result.push(temp)
            temp = ''
        }
        if(i == str.length - 1){
            result.push(temp)
        }

    }

    return result
}
console.log(splitString(strings, ' '))