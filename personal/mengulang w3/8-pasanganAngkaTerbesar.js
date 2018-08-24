function pasanganTerbesar(num) {
    var str = num.toString()
    var basic = parseFloat(str[0]+str[1])
    
    for(i = 0 ; i < str.length-1 ; i ++){
        if(parseFloat(str[i]+str[i+1])>basic){
            basic=parseFloat(str[i]+str[i+1])
        }
    }
    return basic
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99