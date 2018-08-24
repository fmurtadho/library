function dataHandling2(input){

    input.slice(1,1, 'Roman Alamsyah Elsharawy')
    input.slice(2,1, 'Provinsi Bandar Lampung')
    input.slice(4,1, 'Pria')
    input.slice(5,0, 'SMA International Metro')
    console.log(input)

    ttl = input[3].split('/')
    bulan = ttl[1]

    switch(bulan){
        case '05' : console.log('Mei');break;
    }

    var copyofttl = ttl.slice(0)
    console.log(copyofttl.sort(function(a,b){return b-a}))
    console.log(ttl.join('-'))
    console.log(input[1].slice(0,15))
    

}

dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]);

/*
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
