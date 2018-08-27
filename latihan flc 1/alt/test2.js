function patternR(num){
    if(num < 1){
        return ''
    }else{
        var kata = ''
        var counter = 0;
        
        function random(start){
            if(start <= 0){
                return kata
            }
            counter = counter + 1
            
            kata = kata + counter
            return random(start - 1)
        }

        var what = random(num)
        
        return what + '\n' + patternR(num - 1)
    }
}
console.log(patternR(5))