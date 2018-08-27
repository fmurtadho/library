function patternR(num){
    if(num < 1){
        return ''
    }else{
        var modifNum = num - 1
        var kata = ''
        

        function random(start){
            if(start > num){
                return kata
            }
            
            kata = kata + start
            return random(start+1)
        }

        var what = random(1)
        return what + '\n' + patternR(modifNum)
    }
}
console.log(patternR(5))