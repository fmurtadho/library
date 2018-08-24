function angkaPalindrome(num){
    for(var i = 0; i < num; i++){
        num++;
        var changeString = String(num);
        var bantu = '';
        for(var j = changeString.length-1; j >= 0; j--){
          bantu += changeString[j];
        }
        if(changeString == bantu){
          return num;
        }
    }    
  }
  
    // TEST CASES
    console.log(angkaPalindrome(8)); // 9
    console.log(angkaPalindrome(11)); // 11
    console.log(angkaPalindrome(117)); // 121
    console.log(angkaPalindrome(175)); // 181
    console.log(angkaPalindrome(1000)); // 1001
    