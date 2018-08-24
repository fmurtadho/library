

function segitiga(sizing){
    var bantu = '';

    for(var baris = 0; baris <= sizing; baris++){
        for(var spasi = sizing; spasi > baris; spasi--){
            bantu += ' ';
        }
        for(kolom = 0; kolom < (baris * 2)-1; kolom++){
            bantu += '*';
        }
        bantu += '\n';
    }
    console.log(bantu);
}

segitiga(5);

/*sizing = 5
baris = 1 -> 1 <= 5 = true
 spasi = 5 -> 5 > 1 = true -> cetak spasi 1
 spasi = 4 -> 4 > 1 = true -> cetak spasi 2
 spasi = 3 -> 3 > 1 = true -> cetak spasi 3
 spasi = 2 -> 2 > 1 = true -> cetak spasi 4
 spasi = 1 -> 1 > 1 = false

 kolom = 0 -> 0 < 1 = true -> cetak *
 kolom = 1 -> 1 < 1 = false

 line baru....


baris = 2 -> 2 <= 5 = true
 spasi = 5 -> 5 > 2 = true -> cetak spasi 1
 spasi = 4 -> 4 > 2 = true -> cetak spasi 2
 spasi = 3 -> 3 > 2 = true -> cetak spasi 3
 spasi = 2 -> 2 > 2 = false

 kolom = 0 -> 0 < 3 = true -> cetak *
 kolom = 1 -> 1 < 3 = true -> cetak *
 kolom = 2 -> 2 < 3 = true -> cetak *
 kolom = 3 -> 3 < 3 = false

baris = 3 -> 3 <= 5 = true
 spasi = 5 -> 5 > 3 = true -> cetak spasi 1
 spasi = 4 -> 4 > 3 = true -> cetak spasi 2
 spasi = 3 -> 3 > 3 = false

 kolom = 0 -> 0 < 5 = true -> cetak *
 kolom = 1 -> 1 < 5 = true -> cetak *
 kolom = 2 -> 2 < 5 = true -> cetak *
 kolom = 3 -> 3 < 5 = true -> cetak *
 kolom = 4 -> 4 < 5 = true -> cetak *
 kolom = 5 -> 5 < 5 = false

baris = 4 -> 4 <= 5 = true
 spasi = 5 -> 5 > 4 = true -> cetak spasi 1
 spasi = 4 -> 4 > 4 = false

 kolom = 0 -> 0 < 7 = true -> cetak *
 kolom = 1 -> 1 < 7 = true -> cetak *
 kolom = 2 -> 2 < 7 = true -> cetak *
 kolom = 3 -> 3 < 7 = true -> cetak *
 kolom = 4 -> 4 < 7 = true -> cetak *
 kolom = 5 -> 5 < 7 = true -> cetak *
 kolom = 6 -> 6 < 7 = true -> cetak *
 kolom = 7 -> 7 < 7 = false

baris = 5 -> 5 <= 5 = true
 spasi = 5 -> 5 > 5 = false

 kolom = 0 -> 0 < 9 = true -> cetak *
 kolom = 1 -> 1 < 9 = true -> cetak *
 kolom = 2 -> 2 < 9 = true -> cetak *
 kolom = 3 -> 3 < 9 = true -> cetak *
 kolom = 4 -> 4 < 9 = true -> cetak *
 kolom = 5 -> 5 < 9 = true -> cetak *
 kolom = 6 -> 6 < 9 = true -> cetak *
 kolom = 7 -> 7 < 9 = true -> cetak *
 kolom = 8 -> 8 < 9 = true -> cetak *
 kolom = 9 -> 9 < 9 = false

baris = 6 -> 6 <= 5 = false -> selesai!!!



1 2 3 4 5 6 7 8 9 
. . . . *
. . . * * *
. . * * * * *
. * * * * * * *
* * * * * * * * *

*/