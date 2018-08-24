function kotak(cols){
    var bantu = '';
    
    for(var i = 1; i <= cols; i++){
        if(i % 2 !== 0){
            bantu += i;
        }
    }

    for(i = 1; i <= cols; i++){
        console.log(bantu);
    }
}

kotak(5);