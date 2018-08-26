//ALGORITHMA
/*

*/

//PSEUDOCODE
/*
PROCEDURE getMemberSummary(member)
    CREATE empty list `output`
    FOR once
        STORE `oldest` without any value
        STORE `youngest` without any value
        STORE `sum` with value 0
        CREATE `output[i]` with "property" total_member, oldest_member, youngest_member, average_member_age and "property value" member.men.length+member.women.length , {} , {} and 0
            FOR each of member.men
                STORE `current` with value member.men[i]
                IF "current.age" is less than `youngest` OR `youngest` is equal to null
                    STORE `youngest` with value from "current.age"
                    STORE "output[i].youngest_member" with "property and property value" fullname:current.first_name+' '+current.last_name, age:current.age, gender:man
                ENDIF
                IF "current.age" is greater than `oldest` OR `oldest` is equal to null
                    STORE `oldest` with value from "current.age"
                    STORE "output[i].oldest_member" with "property and property value" fullname:current.first_name+' '+current.last_name, age:current.age, gender:man
                ENDIF
            ENDFOR
            FOR each member.women
                STORE `current` with value member.women[i]
                IF "current.age" is less than `youngest` OR `youngest` is equal to null
                    STORE `youngest` with value from "current.age"
                    STORE "output[i].youngest_member" with "property and property value" fullname:current.first_name+' '+current.last_name, age:current.age, gender:woman
                ENDIF
                IF "current.age" is greater than `oldest` OR `oldest` is equal to null
                    STORE `oldest` with value from `current.age`
                    STORE "output[i].oldest_member" with "property and property value" fullname:current.first_name+' '+current.last_name, age:current.age, gender:woman
                ENDIF
            ENDFOR
    CALCULATE Math.round(sum/(member.men.length + member.women.length)) and store the asnwer as `avg`
    STORE `avg` in output[0].average_member_age

    IF member.men.length is equal to zero AND member.women.length is equal to zero
        RETURN output[0] with "property and property value" total_member:0,youngest_member:'belum ada data',oldest_member:'belum ada data',average_member_age:0
    ELSE
        RETURN output[0]
*/

function getMemberSummary(member){
    var output = []
    

    for ( var i = 0 ; i < 1 ; i ++){
        var oldest;
        var youngest;
        var sum = 0;
        
        output[i] = {
            total_member:member.men.length + member.women.length,
            oldest_member:{},
            youngest_member:{},
            average_member_age:0
        }

        for( var j = 0 ; j < member.men.length ; j ++){
            let current = member.men[j]
            sum = sum + current.age
            
            
            if(current.age < youngest || youngest == null){
                youngest = current.age;

                output[i].youngest_member = {
                    full_name: current.first_name + ' ' + current.last_name,
                    age : current.age,
                    gender : 'man'
                }
            }
            if(current.age > oldest || oldest == null){
                oldest = current.age;

                output[i].oldest_member = {
                    full_name: current.first_name + ' ' + current.last_name,
                    age : current.age,
                    gender : 'man'
                }
            }
        }//end for men

        for ( var k = 0 ; k < member.women.length ; k++){
            let current = member.women[k]
            sum = sum + current.age

            if(current.age < youngest || youngest == null){
                youngest = current.age;

                output[i].youngest_member = {
                    full_name: current.first_name + ' ' + current.last_name,
                    age : current.age,
                    gender : 'woman'
                }
            }
            if(current.age > oldest || oldest == null){
                oldest = current.age;

                output[i].oldest_member = {
                    full_name: current.first_name + ' ' + current.last_name,
                    age : current.age,
                    gender : 'woman'
                }
            }
            
        }//end for women
    }
    
    var avg = Math.round(sum / (member.men.length + member.women.length))
    output[0].average_member_age = avg


    if(member.men.length === 0 && member.women.length === 0){
        return output[0] = {
            total_member:0,
            youngest_member:'belum ada data',
            oldest_member:'belum ada data',
            average_member_age:0
        }
    }else{
        return output[0]
    }
    
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