/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, 
sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, 
  yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. 
  Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

RULE:
 WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
*/

//PSEUDOCODE
/*
PROCEDURE howManyGifts(maxbudget,gifts)
  SORT gifts in descending order and store it as `gifts`
  STORE money with value from maxBudget
  STORE empty list `maxbudget`
  FOR each gifts
    IF money minus gifts[i] is greater than equal zero
      ADD gifts[i] to `buy`
      CALCULATE `money` minus gifts[i] and store the answer as `money`
    ENDIF
  ENDFOR
ENDPROCEDURE
*/

function howManyGifts(maxBudget, gifts){
  var gifts = gifts.sort(function(a, b){return a - b});
  var money = maxBudget
  var buy = []
  for(let i = 0 ; i < gifts.length ; i ++){
    if(money - gifts[i] >= 0){
      buy.push(gifts[i])
      money = money - gifts[i]
    }
  }
  return buy.length
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0
