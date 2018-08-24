function konversiMenit(menit) {
    var jam = Math.floor(menit/60)
    var sisamenit = menit % 60
    if(menit>60){

        if(sisamenit<10){
            return jam+':0'+sisamenit
        }else {
            return jam+':'+sisamenit
        }
        
    } else if(menit<10) {

        return '0:0'+sisamenit

    } else if(menit>10) {

        return '0:'+sisamenit

    }
}


  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
