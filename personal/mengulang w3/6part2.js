function angkaPalindrome(num){
    for(var i = 0 ; i <= num ; i ++){
        num++

        var str = num.toString()
        var reversed = ''

        for(var j = str.length-1 ; j >= 0 ; j --){
            reversed = reversed + str[j]
        }
        
        if(reversed == num){
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

var test = 10
var test2 = '10'
console.log(test.length+' length test')
console.log(test2.length+' test kalau string')

//KESIMPULANNYA KALAU NUM ITU GAK BISA DICARI LENGTH NYA LANGSUNG
//HARUS DIRUBAH DULU JADI STRING