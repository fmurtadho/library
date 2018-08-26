/**

Reverse Even

Implementasikan function reverseEven untuk membalikkan setiap elemen string dengan urutan ganjil

yang ada di dalamnya.

Contoh:

- input: ['awtian', 'raijin', 'thunderkeg']

  output: ['naitwa', 'raijin', 'gekrednuht']

- input: ['draco', 'luna', 'riddle', 'hagrid']

  output: ['ocard', 'luna', 'elddir', 'hagrid']

- input: []

  output: []

Aturan coding:

WAJIB MENYERTAKAN ALGORITHMA DAN PSEUDOCODE

Dilarang menggunakan built-in function:

- .map()

- .filter()

- .reduce()

- .reverse()

- .split()

- .join()

*/



//PSEUDOCODE
/*
PROCEDURE reverseOdd (arr)
    STORE empty list `output`
    FOR each `arr`
        STORE `current` with value arr[i]
        STORE curNum with value i + 1
        STORE curName without any value
        IF `curNum` modulo 2 is not equal to zero
            STORE curName with value from PROCEDURE reverse(arr[i])
            ADD curName to `output`
        ELSE IF curNum modulo is equal to zero
            ADD arr[i] to `output`
        ENDIF
    ENDFOR
    RETURN `output`
ENDPROCEDURE
*/

function reverseOdd (arr) {

    var output = []

    for ( var i = 0 ; i < arr.length ; i ++){
        var current = arr[i]
        var curNum = i + 1
        var curName;

        if (curNum % 2 !== 0){
            var curName = reverse(arr[i])
            output.push(curName)
        }else if (curNum % 2 == 0){
            output.push(arr[i])
        }

    }

return output
}


function reverse (str){
    var output = ''

    for (var i = str.length - 1 ; i >= 0 ; i --){
        output = output + str[i]
    }

    return output
}






console.log(reverseOdd(['clinkz', 'jahrakal', 'kael']));

// [ 'zknilc', 'jahrakal', 'leak' ]



console.log(reverseOdd(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));

// [ 'gnafnoom', 'nightshade', 'regnirbthgil', 'strygwyr' ]



console.log(reverseOdd([]));

// []