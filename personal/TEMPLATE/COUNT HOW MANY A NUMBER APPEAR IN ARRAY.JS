arr = [1,1,1,6,2,3,4];
mapping = {};
console.log(mapping + ' ini isi mapping awal')
counter = 0
for(var i = 0;i < arr.length; i++){
    console.log(mapping[arr[i]]+' wtf is this')
    if (mapping[arr[i]] === undefined) {
        mapping[arr[i]] = 0;
        console.log(mapping[arr[i]]+' disini harusnya masih kosong')
        mapping[arr[i]] = mapping[arr[i]] + 1
        console.log(mapping[arr[i]] + 'disini udah ada isinya')
        }
    
}
console.log(mapping[1])
console.log(mapping[2])
console.log(mapping[3])
console.log(mapping[4])
console.log(mapping[6])


console.log(mapping)
