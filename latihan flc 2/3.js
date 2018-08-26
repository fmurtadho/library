/*

==================================

Array Mastery: Average Length Word

==================================

Nama:________

[INSTRUKSI]

Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string

yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,

kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya

sama dengan rata-rata jumlah kata.



NOTE:

 - Spasi tidak dihitung

 - Jika hasil rata-rata adalah desimal maka dibulatkan



[CONTOH]

input (kalimat): Do you want to become a great coder.
2+3+4+2+6+1+5+5 = 28

rata-rata panjang kata dalam kalimat: 3

output: ['you']



input (kalimat): You dont know what you have until you lose it!.

rata-rata panjang kata dalam kalimat: 4

output: ['dont', 'know', 'what', 'have', 'lose']

*/



function averageLengthWord(words) {

    var split = words.split(' ')
    var length = []
    var output = []

    for ( var i = 0 ; i < split.length ; i ++){
        var current = split[i]
        length.push(current.length)
    }

    var sum = 0;
    for ( var j = 0 ; j < length.length ; j ++){
        sum = sum + length[j]
    }

    var avg = Math.round(sum/length.length)
    for ( var l = 0 ; l < length.length ; l++){
        if(length[l] === avg){
            output.push(split[l])
        }
    }
  return output
  }
  
  
  
  console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
  
  console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
  
  console.log(averageLengthWord('I am diligent')); // []