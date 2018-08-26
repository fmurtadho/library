/**
================================
Array Mastery: Add Evens and Odds
================================

[INSTRUKSI]

Function addEvenOdd akan menerima satu parameter berupa array of number. Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan return array 2 dimensi di mana array pertama merupakan hasil penjumlahan angka ganjil dan array selanjutnya adalah hasil penjumlahan angka genap

Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]

input: [2, 4, 6, 10]
output: [[0], [22]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode atau algorithma. Tidak ada pseudocode atau algorithma / pseudocode atau algorithma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/



function addEvenOdd (arrNum) {

    var ganjil = []
    var genap = []
    var output = [[],[]]

    for ( var i = 0 ; i < arrNum.length ; i ++){
        if(arrNum[i] % 2 === 0 ){
            genap.push(arrNum[i])
        }else if(arrNum[i] % 2 !== 0){
            ganjil.push(arrNum[i])
        }
    }

    var ganjilO = 0;

    for ( var j = 0 ; j < ganjil.length ; j ++){
        ganjilO = ganjilO + ganjil[j]
    }

    output[0].push(ganjilO)

    var genapO = 0;

    for (var k = 0 ; k < genap.length ; k ++){
        genapO = genapO + genap[k]
    }

    output[1].push(genapO)

    return output
}

console.log(addEvenOdd([3, 5, 7, 8])); // [ [15], [8] ]

console.log(addEvenOdd([2, 4, 6, 10])); // [ [0], [22] ]

console.log(addEvenOdd([])); // [ [0], [0] ]

/*ALOGARITMA
1. buat variabel berisi array kosong untuk menampung bilangan ganjil
2. buat variabel berisi array kosong untuk menampung bilangan genap
3. buat variabel berisi array kosong untuk menampung jawaban akhir
4. lakukan looping variabel arrNum
5. apabila ditemukan angka di dalam arrNum yang habis dibagi 2 maka di push ke array genap
6. apabila ditemukan angka di dalam arrNum yang tidak habis dibagi 2 maka di push ke array ganjil
7. buat variabel dengan nilai 0 untuk menampung hasil penjumlahan array ganjil
8. buat looping dimana setiap kalinya melakukan penjumlahan antara variabel penampung hasil penjumlahan dengan angka dalam array ganjil
9. buat variabel dengan nilai 0 untuk menampung hasil penjumlahan array genap
10. buat looping dimana setiap kali looping melakukan penjumlahan antara variabel penampung hasil penjumlahan dengan angka dalam array genap
11. push hasil penjumlahan array ganjil ke array variabel output
12. push hasil penjumlahan array genap ke array variabel output
13. tampilkan variabel output
*/
