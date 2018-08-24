//define your function
function characterCount(word) {

    //initialize the counter to 0
    var countX = 0;
    var countO = 0;
    //loop through the word
     for (i = 0; i < word.length; i++) {
        //if the character in the word is equal to  the character passed in as a parameter increment count
        if (word[i] == 'x') {

            countX++;
        }
        else if(word[i] == 'o') {

            countO++;
        }
    
   }
   //return the sentence. 
   return countX + ' dan ' + countO ;
 }

 console.log(characterCount('xoxoxox'))