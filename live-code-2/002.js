
/*
==================================
Array Mastery: Second Smallest
==================================
Nama:________
[INSTRUKSI]
Function secondSmallest akan menerima satu parameter berupa array yang berisikan angka, 
dimana dengan asumsi kemungkinan angka dari 0 - 999, 
dan angka dalam array minimal 3 angka, 
dan tidak ada angka yang bernilai sama (ini adalah info test case, bukan harus divalidasi/dicek).
secondSmallest akan mengembalikan angka yang kedua terkecil dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 2
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method Math.max, Math.min, .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/

function secondSmallest(numbers) {
  
  var terkecil = numbers[0]
  
    for(var i = 0 ; i < numbers.length ; i ++){
      if(numbers[i] < terkecil){
        terkecil = numbers[i]
        }
    }
    
    numbers2 =[]
    for(var j = 0 ; j < numbers.length ; j++){
      if(numbers[j] !== terkecil){
        numbers2.push(numbers[j])
      }
    }
    
    var terkecil2 = numbers2[0]
    for(var k = 0 ; k < numbers2.length ; k++){
      if(numbers2[k] < terkecil2){
        terkecil2 = numbers2[k]
      }
    }
  return terkecil2
}

  
// TEST CASES
console.log(secondSmallest([5, 2, 1, 4])); // 2
console.log(secondSmallest([999, 5, 0, 1, 4, 998])); // 1
console.log(secondSmallest([15, 32, 11, 14])); // 14
console.log(secondSmallest([5, 4, 3, 2, 1, 0])); // 1
console.log(secondSmallest([123, 321, 143, 313])); // 143