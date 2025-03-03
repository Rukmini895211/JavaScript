let n = 7, result = '1';

if(n == 1){
    console.log(result);
} else {
    for(var i=1; i<n; i++){
        
        let num = result[0];
        let count = 1;
        let output = '';
        
        for(var j = 1; j<= result.length; j++){
            
            if( num == result[j])
                count++;
            else if(j == result.length){
                output += count + num; 
            }
            else{
                output += count + num; 
                count = 1;
                num = result[j];
            }
            
        }
        result = output;
        
    }
    
    console.log(result);
}
