var title = [];
for (var i=0; i<3; i++) {
    title[i] = {
        name: "name  : " + i,
        age: "age  : " + i,
        hometown: "hometown  : " + i
    };
}
console.log(title);
// output will be:
// [ { name: 'name1', age: 'age1', hometown: 'hometown1' },
//   { name: 'name2', age: 'age2', hometown: 'hometown2' },
//   { name: 'name3', age: 'age3', hometown: 'hometown3' 




// function createVariables(limit){
//     var accounts = [];
  
//     for (var i = 0; i <= limit; i++) {
//         accounts[i] = "whatever" + i
//     }
  
//     return accounts;
//   }

// console.log(createVariables(10));



// for(var i=0; i<=3; i++) {
//     window['p'+i] = "hello " + i;
// }

// console.log(p0); // hello 0
// console.log(p1); // hello 1
// console.log(p2); // hello 2
// console.log(p3); // hello 3