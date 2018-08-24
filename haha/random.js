// Write a program to check whether a given number is an ugly number.
//
//
//
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
//
//
//
// Note that 1 is typically treated as an ugly number.
//
//
// Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


/**
 * @param {number} num
 * @return {boolean}
 */
function isUgly(num) {
    if (num <= 0) return false;
    if (num === 1) return true;
    while (num % 2 === 0) num = num / 2;
    while (num % 3 === 0) num = num / 3;
    while (num % 5 === 0) num = num / 5;
    
    return num === 1;
};

// console.log(isUgly(17))

function uglyNumbers(num){

    while (num % 2 ===0){
        // console.log('before = ' +num)
        num = num / 2
        // console.log('after = '+num)
    }
    // console.log('num setelah di olah while pertama: '+num)

    while( num % 3 === 0){
        num = num / 3
    }
    // console.log('num setelah di olah while kedua: '+num)

    while ( num % 5 === 0){
        num = num / 5
    }
    // console.log('num setelah di olah while ketiga: '+num)

    if(num === 1){
        return true
    }else{
        return false
    }

}

console.log(uglyNumbers(7))