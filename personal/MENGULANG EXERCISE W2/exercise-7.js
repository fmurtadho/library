//1. Menyusun Barisan Bintang
/*Output
jika rows1 = 5

*
*
*
*
*
*/
var rows1 = 5

for(i=1;i<=rows1;i++){

    console.log('*')
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
/*Output
jika rows2 = 5

*****
*****
*****
*****
*****
*/

var rows2 = 5

for(i=1;i<=rows2;i++) {

    let output =''

    for(j=1;j<=rows2;j++) {
        
        output += '*'

    }
    console.log(output)
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
/*jika rows3 = 5

*
**
***
****
*****
*/
var rows3 = 5

for(i=1;i<=rows3;i++){

    let output=''

    for(j=1;j<=i;j++){

        output += '*'
    }
    console.log(output)
}
