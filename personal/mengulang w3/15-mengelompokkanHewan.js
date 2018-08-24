function groupAnimals(animals) {
    var output = []
    var kamus = 'abcdefghijklmnopqrstuvwxyz'

    //scan kamus
    for(var i = 0 ; i < kamus.length ; i ++){
        var temp = []
        for(var j = 0 ; j < animals.length ; j ++){
            if(animals[j][0] === kamus[i]){
                temp.push(animals[j])
            }
        }
        if(temp.length>0){
            output.push(temp)
        }
    }
    return output
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]