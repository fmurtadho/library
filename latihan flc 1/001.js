/*

Ugly numbers adalah angka yang jika dibagi dengan faktor prima angka 2, 3 atau 5 menghasilkan angka 1.

Contoh 1:
4 merupakan ugly number karena
Proses:
  1. 4 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 2
     2 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 4 merupakan ugly number

contoh 2:
15 merupakan ugly number karena
Proses:
  1. 15 dibagi 2 menghasilkan sisa bagi > 0, maka akan melanjutkan ke step 2
  2. 15 dibagi 3 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
     5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 15 merupakan ugly number

contoh 3:
17 bukan ugly number karena
Proses:
  1. 17 dibagi 2 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 2
  2. 17 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 17 dibagi 5 menghasilkan sisa bagi > 0 dan hasilnya bukan 1

Maka 17 bukan ugly number

contoh 4:
20 merupakan ugly number karena
Proses:
  1. 20 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 10
     10 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
     5 dibagi 2 menghasilkan sisa bagi > 0 maka lanjut ke step 2
  2. 5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 20 merupakan ugly number

Buatlah sebuah function getUglyNumber dimana menerima sebuah parameter bertipe Number.
Function tersebut mengembalikan/me-return array kumpulan deret bilangan ugly number sampai angka parameter tersebut.

Contoh 1:
input: 10
output: [ 2, 3, 4, 5, 6, 8, 9, 10 ]

Contoh 2:
input: 20
output: [ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]

RULE:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE

*/

//PSEUDOCODE
/*
PROCEDURE getUglyNumber(num)
  STORE empty list `output`
  FOR with i = 2 . loop will continue until i = num.
    STORE `ugly` with value from PROCEDURE isUgly(i)
    IF `ugly` is equal to true
      ADD i to `output`
    ENDIF
  ENDFOR
ENDPROCEDURE

PROCEDURE isUgly(num)
  WHILE `num` modulo 2 is equal to zero
    DIVIDE `num` with 2 and store the answer as `num`
  ENDWHILE
  WHILE `num` modulo 3 is equal to zero
    DIVIDE `num` with 3 and store the answer as `num`
  ENDWHILE
  WHILE `num` modulo 5 is equal to zero
    DIVIDE `num` with 5 and store the answer as `num`
  ENDWHILE
  IF `num` is equal to 1
    RETURN true
  ELSE
    RETURN false
  ENDIF
END PROCEDURE
*/

function getUglyNumber(num) {
  var output = []

  for ( var i = 2 ; i <= num ; i ++){
    var ugly = isUgly(i)
    if(ugly == true){
      output.push(i)
    }
  }
  return output
}

/*

*/

function isUgly(num){
  while(num % 2 === 0){
    num = num / 2
  }
  
  while(num % 3 === 0){
    num = num / 3
  }

  while(num % 5 === 0){
    num = num / 5
  }

  if(num === 1){
    return true
  }else{
    return false
  }
}

console.log(getUglyNumber(10)); //[ 2, 3, 4, 5, 6, 8, 9, 10 ]
console.log(getUglyNumber(20)); //[ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]
console.log(getUglyNumber(4)); //[ 2, 3, 4]
console.log(getUglyNumber(1)); //[]
