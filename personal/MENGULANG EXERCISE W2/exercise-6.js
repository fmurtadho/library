//1. Melakukan Looping Menggunakan While
/*
OUTPUT :
LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer                                                                              
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer*/
var input1=2
var input2=20
console.log('LOOPING PERTAMA')
while(input1<=20){
    console.log(input1+' - I love coding')
    input1+=2
}
console.log('LOOPING KEDUA')
while(input2>=2){
    console.log(input2+' - I will become fullstack developer')
    input2-=2
}

//2. Melakukan Looping Menggunakan For
/*LOOPING PERTAMA
1 - I love coding
2 - I love coding
3 - I love coding
4 - I love coding
5 - I love coding 
6 - I love coding
7 - I love coding
8 - I love coding
9 - I love coding
10 - I love coding
11 - I love coding
12 - I love coding 
13 - I love coding
14 - I love coding
15 - I love coding
16 - I love coding
17 - I love coding
18 - I love coding
19 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
19 - I will become fullstack developer
18 - I will become fullstack developer
17 - I will become fullstack developer
16 - I will become fullstack developer
15 - I will become fullstack developer
14 - I will become fullstack developer
13 - I will become fullstack developer
12 - I will become fullstack developer
11 - I will become fullstack developer
10 - I will become fullstack developer
9 - I will become fullstack developer
8 - I will become fullstack developer
7 - I will become fullstack developer
6 - I will become fullstack developer
5 - I will become fullstack developer
4 - I will become fullstack developer
3 - I will become fullstack developer
2 - I will become fullstack developer
1 - I will become fullstack developer
*/

console.log('LOOPING PERTAMA')
for(i=1; i<=20; i++){
    console.log(i+' - I love coding');
}

console.log('LOOPING KEDUA')
for(j=20; j>=1; j--){
    console.log(j+' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap
/*Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
Di dalam perulangan, periksa setiap angka counter:
Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL
*/

for(i=1; i<=100; i++){
    if(i % 2 == 0){
        console.log('GENAP')
    }else{
        console.log('GANJIL')
    }
}

/*Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
Pada 3 perulangan baru ini periksa setiap angka counter:
Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3" dan seterusnya.
*/

for(i=1;i<=100;i+=2){
    if(i % 3 == 0){
        console.log(i+' KELIPATAN 3')
    }
}

for(j=1;j<=100;j+=5){
    if(j % 6 == 0){
        console.log(j+' KELIPATAN 6')
    }
}

for(k=1;k<=100;k+=9){
    if(k % 10 == 0){
        console.log(k+' KELIPATAN 10')
    }
}