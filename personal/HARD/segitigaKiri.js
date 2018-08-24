function kotak5(cols){
    var bantu = '';

    for(var i = 1; i < cols; i++){
        for(var j = cols; j > i; j--){
            bantu += ' ';
        }
        for(var k = 1; k < i; k++){
            bantu += k;
        }
        bantu += '\n';
    }
    console.log(bantu);
}


kotak5(6);