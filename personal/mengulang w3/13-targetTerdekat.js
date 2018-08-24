function targetTerdekat(arr) {
    var oStart = arr.indexOf('o') // menemukan posisi 0
    var xExist = arr.indexOf('x') // apakah ada x

    if(xExist < 0){
        return 0
    }
    if(xExist >= 0){ //battle begins
        var xEnd;
        var xFront = 0;
        //tentukan posisi x terdekat ada di depan o atau dibelakang o
        for(k = oStart ; k < arr.length ; k++){
            if(arr[k]==='x'){
                xFront = xFront + 1;
                break;
            }
        }
        if(xFront > 0){ //ada di depan
            for(i = oStart ; i < arr.length ; i++){
                if(arr[i]==='x'){
                    xEnd = i;
                    break;
                }
            }
        }
        if(xFront <= 0){ //ada di belakang
            for(j = oStart ; j >= 0 ; j--){
                if(arr[j]==='x'){
                    xEnd = j
                    break;
                }
            }
        }

        return Math.abs(xEnd - oStart)
  }
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2