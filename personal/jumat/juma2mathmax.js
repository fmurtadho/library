var values = [5,2,3,4,9,1,7]

function cariAngkaMaksimum (array) {
    var result = array[0]
    for(var i = 1; i < array.length; i++){
        console.log('Nilai Maksimum, '+result)
        if (result < array[i]){
            result = array [i]
        }
    }

    return result
}
console.log(cariAngkaMaksimum(values))