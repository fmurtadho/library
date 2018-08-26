function printNumbers(n){
    var result;
    if(n <= 1)
        result = '1';
    else
        result = printNumbers(n-1) + n;
    console.log(result);
    return result;
}

printNumbers(10);