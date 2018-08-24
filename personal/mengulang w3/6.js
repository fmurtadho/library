function angkaPalindrome(num){
    for(i = 0 ; i <= num ; i++){
        num++;
        //console.log(num + ' ini num yang terus bertambah')
        
        var str = num.toString()
        var reversed = ''
        for(j = str.length-1 ; j >= 0 ; j--){
            reversed = reversed + str[j]
        }

        if(num == reversed){
            return num
        }

    }

}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

/*
jadi gini mikirnya

pertama tama bikin looping num
batasnya adalah 
*/