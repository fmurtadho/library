function pasanganTerbesar(num) {
    var str = num.toString()
    var arr = [];    
    for(var i = 0; i < str.length;i++){
        
        var output = '';
        output += str[i] + str[i+1];
        
        if(str[i+1] === undefined){
            break;
        }
    
        arr.push(output);
     
    }

    var max = Math.max.apply(null, arr)
    return max
    
}
//TEST-CASE
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
            
    