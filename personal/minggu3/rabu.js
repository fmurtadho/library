function buying(name) {
    
    var users = [
      ['Adi', 20, 'male'],
      ['Budi', 19, 'male'],
      ['Cici', 20, 'female'],
      ['Dodo', 21, 'male']
    ];
    var product = [
      ['zarra clothes', 500000],
      ['Levis jeans', 1000000],
      ['Adidas Shoes', 1000000]
    ];
    var trans = [
      [0,0],
      [0,2],
      [1,1],
      [2,0],
      [3,2]
    ];

    var idUser=''
    for(i=0;i<users.length;i++){
        if(users[i][0] === name){
           idUser = i
           break;
        }
    
    }
    var idProduct=[]
    for(j=0;j<trans.length;j++){
        if(trans[j][0]==idUser){
            idProduct.push(trans[j][1])
        }
    }

    var transaksi=[]
    for(k=0;k<=idProduct.length;k++){
        if(idProduct[k]==0){
            transaksi.push('Zarra Clothes')
        }else if(idProduct[k]==1){
            transaksi.push('Levis Jeans')
        }else if(idProduct[k]==2){
            transaksi.push('Adidas Shoes')
        }

    }
return transaksi
}
    
console.log(buying('Adi')); // ['zarra clothes', 'Adidas Shoes']
console.log(buying('Budi'));
console.log(buying('Cici'));
console.log(buying('Dodo'));

