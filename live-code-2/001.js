/*
===================
Jumlah Huruf Vocal
===================
[INSTRUCTIONS]

SumVocal adalah sebuah function yang menerima satu parameter berupa array of string.
function akan mereturn sebuah nilai jumlah dari huruf vocal yang ada di array tersebut.
Jika tidak ada angka ganjil dalam array tersebut, maka function akan mereturn angka -1

[RULE]
- Wajib menuliskan pseudocode atau algorithma. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan sintaks .split()! .findIndex .indexOf .filter .map
- Dilarang menggunakan regex .match, .replace dan lainnya!
- Asumsi input selalu upper case atau huruf besar
- Jika tidak ada huruf vocal maka function akan mengembalikan nilai -1
[EXAMPLE]
SumVocal('ABCDEFG')

output: 2
*/

function SumVocal(str) {
  var kamus = 'AIUEO'
  var counter = 0;

  for(var i = 0 ; i < str.length ; i ++){  //kamus
    
    for(var j = 0 ; j < str.length ; j ++){
      if(kamus[i] == str[j]){
        counter = counter + 1
      }
  }
 
}
if(counter <= 0){
  return -1
}else {
  return counter
}
}

console.log(SumVocal('AIUEO')); // 5
console.log(SumVocal('HACKTIV8')); // 2
console.log(SumVocal('JAKARTA')); // 3
console.log(SumVocal('QWRTYP')); // -1

/*
PROCEDURE "sumVocal" with parameter "STR"
  STORE "kamus" with value 'aiueo'
  STORE "counter" with value 0
    FOR with initialize count 0 , loop will continue add 1 to initialize count as long as less than str length
      FOR with initialize count 0 , loop will continue add 1 to initialize count as long as less than str length
        IF kamus at index(initialize count) and str at index(initialize count) have same value
            add 1 to counter
        END IF
      END FOR
    END FOR
IF "counter" is less than equal zero
  RETURN -1
ELSE
  RETURN COUNTER


      */  


