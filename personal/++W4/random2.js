
function changeMe(arr) {
    var people = [];

    for (let i = 0; i < arr.length; i++) {
        var person = {};
        person.firstName = arr[i][0];
        person.lastName = arr[i][1];
        person.gender = arr[i][2];

        if (arr[i].length === 3 || arr[i][3] > 2018) {
            person.age = 'Invalid Birth Year';
        } else {
            person.age = 2018 - arr[i][3];
        }

        people.push(person);
    
    }

    for (let i = 0; i < people.length; i++) {
        console.log((i + 1) + '. ' + people[i].firstName + ' ' + people[i].lastName + ':' );
        console.log(people[i]);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""