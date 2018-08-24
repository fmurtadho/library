function dataHandling2(input){
    input.splice(1, 1, 'Roman Alamsyah Elsharawy');
    input.splice(2, 1, 'Provinsi Bandar Lampung');
    input.splice(4, 1, 'Pria');
    input.splice(5, 0, 'SMA Internasional Metro');

    console.log(input) //hasil splice

    var ttl = input[3].split('/')
    var bulan = ttl[1]
    
    switch (bulan) { //menentukan bulan
        case '01' : console.log('Januari');break;
        case '02' : console.log('Februari');break;
        case '03' : console.log('Maret');break;
        case '04' : console.log('April');break;
        case '05' : console.log('Mei');break;
        case '06' : console.log('Juni');break;
        case '07' : console.log('Juli');break;
        case '08' : console.log('Agustus');break;
        case '09' : console.log('September');break;
        case '10' : console.log('Oktober');break;
        case '11' : console.log('November');break;
        case '12' : console.log('Desember');break;
    }
    copyofttl = ttl.slice(0) //supaya gak merembet ke semua
    console.log(copyofttl.sort(function(a,b){return b-a})) // hasil sort
    console.log(ttl.join('-')) // hasil join
    console.log(input[1].slice(0,15)) //tidak lebih dari 15 karakter
}



dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] );

/*
* ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
*/