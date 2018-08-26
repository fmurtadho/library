/*

  ================

  GET MEMBER SUMMARY

  ================

  author: Muhammad Ramadiansyah

  description: Get member summary adalah sebuah fungsi untuk mendapatkan ringkasan informasi berdasarkan data-data

               seperti nama depan, nama belakang, dan umur masing-masing untuk pria dan wanita.

               fungsi ini akan mengembalikan sebuah object dengan atribut total member, rata-rata umur, 

               dan anggota yang paling tua dan muda dengan keterangan nama lengkap, umur, dan gender.

  

  rules:

  1. tidak boleh menggunakan built in function seperti sort, filter, index of, Math.max, Math.min dan sejenisnya

  2. asumsi anggota paling tua dan paling muda hanya 1 orang. Boleh memilih antara yang lebih dulu diinput

     atau yang terakhir diinput. Lihat contoh example 2 untuk lebih jelasnya.



  examples:

  1. diberikan data = {

    men: [{

      first_name: 'Example',

      last_name: 'Contoh',

      age: 27

    }, {

      first_name: 'Some',

      last_name: 'Thing',

      age: 22

    }],

    women: [{

      first_name: 'Manusia',

      last_name: 'Biasa',

      age: 19

    }]

  }

    maka output = {

      total_member: 3,

      oldest_member: {

        full_name: 'Example Contoh',

        age: 27,

        gender: 'man'

      },

      youngest_member: {

        full_name: 'Manusia Biasa',

        age: 19,

        gender: 'Woman'

      }

    }

  2. diberikan data = {

    men: [{

      first_name: 'Example',

      last_name: 'Contoh',

      age: 22

    }, {

      first_name: 'Some',

      last_name: 'Thing',

      age: 22

    }],

    women: [{

      first_name: 'Manusia',

      last_name: 'Biasa',

      age: 21

    }]

  }

    maka output = {

      total_member: 3,

      oldest_member: {

        full_name: 'Example Contoh',

        age: 22,

        gender: 'man'

      },

      youngest_member: {

        full_name: 'Manusia Biasa',

        age: 21,

        gender: 'Woman'

      }

    }



    atau bisa juga 

     maka output = {

      total_member: 3,

      oldest_member: {

        full_name: 'Smoe Thing',

        age: 22,

        gender: 'man'

      },

      youngest_member: {

        full_name: 'Manusia Biasa',

        age: 21,

        gender: 'Woman'

      }

    }

*/



function getMemberSummary (member) {
    var men = member.men
    var women = member.women
    var ymen = youngestMen(men)
    var omen = oldestMen(men)
    var ywomen = youngestWomen(women)
    var owomen = oldestWomen(women)
    var totalM = member.men.length + member.women.length
    var sum = 0;
    var object = []

    var youngest;
    var oldest;

    

    if(ymen < ywomen || ywomen == null){
      youngest = ymen
    }else if ( ywomen < ymen || ymen == null){
      youngest = ywomen
    }

    if(omen > owomen || owomen == null){
      oldest = omen
    }else if(owomen > omen || omen == null){
      oldest = owomen
    }

    for ( var i = 0 ; i < 1 ; i ++){
      object[i] = {
        totalMember : totalM,
        oldestMember : {},
        youngestMember: {},
        averageMemberAge: 0,
      }

      for ( var j = 0 ; j < men.length ; j ++){
        let current = men[j]
        sum = sum + current.age
        
        if( current.age === youngest){
          object[i].youngestMember = {
            fullName: current.first_name + ' ' + current.last_name,
            age: current.age,
            gender: 'man'
          }
        }else if(current.age === oldest){
          object[i].oldestMember = {
            fullname: current.first_name + ' ' + curren.last_name,
            age: current.age,
            gender: 'man'
          }
        }
      }
      
      for ( var k = 0 ; k < women.length ; k ++){
        let current = women[k]
        sum = sum + current.age
        
        if (current.age === youngest){
          object[i].youngestMember = {
            fullname: current.first_name + ' ' + current.last_name,
            age: current.age,
            gender: 'woman'
          }
          
        }else if ( current.age === oldest){
          object[i].oldestMember = {
            fullname: current.first_name + ' ' + current.last_name,
            age: current.age,
            gender: 'woman'
          }
        }
      }

      

    }//end for
    var average = Math.round(sum / totalM)
    object[0].averageMemberAge = average

    if(member.men.length == 0 && member.women.length == 0){
      return object[0] = {
        total_member: 0,

        oldest_member: 'Belum ada data',
    
        youngest_member: 'Belum ada data',
    
        average_member_age: 0 
      }
    }else{
      return object[0]
    }
}

function youngestMen (member){
    var youngestAge;
    var youngestMen;

    for ( var i = 0 ; i < member.length ; i ++){
        let current = member[i]

        if(current.age < youngestAge || youngestAge == null){
            youngestAge = current.age
            youngestMen = current.first_name + ' ' + current.last_name
        }
        
    }
    

    return youngestAge
}

function oldestMen (member){
    var oldestAge;
    var oldestMen;

    for ( var i = 0 ; i < member.length ; i ++){
        let current = member[i]

        if(current.age > oldestAge || oldestAge == null){
            oldestAge = current.age
            oldestMen = current.first_name + ' ' + current.last_name
        }
        
    }
    
    return oldestAge
}

function youngestWomen (member){
    var youngestAge;
    var youngestWomen;

    for (var i = 0 ; i < member.length ; i ++){
        let current = member[i]

        if ( current.age < youngestAge || youngestAge == null){
            youngestAge = current.age
            youngestWomen = current.first_name + ' ' + current.last_name
        }
    }

    return youngestAge
}

function oldestWomen (member){
    var oldestAge;
    var oldestWomen;

    for ( var i = 0 ;i < member.length ; i ++){
        let current = member[i]

        if ( current.age > oldestAge || oldestAge == null){
            oldestAge = current.age
            oldestWomen = current.first_name + ' ' + current.last_name
        }
    }

    return oldestAge
}



console.log(getMemberSummary({

  men: [{

        first_name: 'Wika',

        last_name: 'Silo',

        age: 30

      }, {

        first_name: 'Dhani',

        last_name: 'Damara',

        age: 27

      }, {

        first_name: 'Fandy',

        last_name: 'Barestu',

        age: 18

    }],

  women: [{

      first_name: 'Acha',

      last_name: 'Acha',

      age: 29

    }, {

      first_name: 'Zena',

      last_name: 'Villenia',

      age: 32

    }, {

      first_name: 'Annisa',

      last_name: 'Ayu',

      age: 21

    }]

}));

//output

/*

 {

   total_member: 6,

   oldest_member: {

      full_name: 'Zena Villenia',

      age: 32,

      gender: 'man'

   },

   youngest_member: {

    full_name: 'Fandy Barestu',

    age: 18,

    gender: 'man'

   },

   average_member_age: 26

 }

*/



console.log(getMemberSummary({

  men: [{

    first_name: 'Rama',

    last_name: 'Diansyah',

    age: 20

  }, {

    first_name: 'Malik',

    last_name: 'Adhi',

    age: 21

  }],

  women: [{

    first_name: 'Dita',

    last_name: 'Zakiah',

    age: 27

  }]

}))



/*

  total_member: 3,

  oldest_member: {

      full_name: 'Dita Zakiah',

      age: 27,

      gender: 'woman'

   },

  youngest_member: {

    full_name: 'Rama Diansyah',

    age: 20,

    gender: 'man'

   },

   average_member_age: 23

*/



console.log(getMemberSummary({

  men: [],

  women: [{

    first_name: 'Zena',

    last_name: 'Villenia',

    age: 20

  }]

}))

/*

  { 

    total_member: 1,

    oldest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },

    youngest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },

    average_member_age: 20 

  }

*/



console.log(getMemberSummary({

  men: [],

  women: []

}))



/*

  { 

    total_member: 0,

    oldest_member: 'Belum ada data',

    youngest_member: 'Belum ada data',

    average_member_age: 0 

  }

*/