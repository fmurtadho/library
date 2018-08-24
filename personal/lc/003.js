/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.
Contoh:
  - height: 3
  - output:
    ***
    ###
    ***
  - height: 1
  - output:
    *
  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****
Tinggi dan lebar dari persegi sesuai dari variable height
*/

var height=10
var output=''
for(i=1;i<=height;i++){
  
  if(i % 2 == 0) {
    for(j=1;j<=height;j++){

      output +='#'
    }
  }else {
    for(k=1;k<=height;k++){
    output +='*'
  }
  }
  output+= '\n'
}

console.log(output)
