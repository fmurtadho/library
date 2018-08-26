var sum = 0;
for ( var i = 1 ; i <= 100 ; i ++){
    sum = sum + i
}

// console.log(sum)

function getTotal (number){
    if (number == 1){
        return 1
    }else{
        return number+getTotal(number-1)
    }
    
}

console.log(getTotal(100))