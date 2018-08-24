function kotak2(cols){
    var bantu = '';

    for(var i = 1; i <= cols; i++){
        for(var j = 1; j <= i; j++){
            bantu += j;
        }
        bantu += '\n';
    }
    console.log(bantu);
}


kotak2(5);