/*

Buatlah sebuah fungsi dengan nama balikString. 
Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
//input "hello world!"
//output
"!dlrow olleh"

*/

function balikString (str){
    output = ''
    for(var i = str.length-1 ; i >= 0 ; i --){
        output = output + str[i]
    }
    console.log(output)
}

balikString('hello world !');