// printPatternRowRecur(n)
//     if n < 1
//         return
        
//     print "* "
//     printPatternRowRecur(n-1)

// printPatternRecur(n)
//     if n < 1
//         return
    
//     printPatternRowRecur(n)
//     print "\n"
//     printPatternRecur(n-1)



function printPatternRowRecur(n)
{
    if (n < 1){
        return;
    }else{
        return '*' + printPatternRowRecur(n-1);
    }
}

// console.log(printPatternRowRecur(5)); 

function printPatternRecur(n)
{
    // base condition
    if (n < 1)
        return;
     
    // print the stars of the n-th row 
    printPatternRowRecur(n); 
     
    // move to next line
     
    // print stars of the remaining
    // rows recursively
    return printPatternRecur(n-1);
     
}

console.log(printPatternRecur(5));