let n = 5;
let output = '';
for(var i=0;i<n;i++){
    if(i<1)
        output = '1';
    else{
        let res = '';
        for(var j = 0; j<output.length;j++){
            if(output.length < 2){
                if(output[j] == 1)
                    res += '11';
                else if(output[j] == 2)
                    res += '12';
            } else{
                if(output[j] == output[j+1] && output[j] == 1){
                    res += '21';
                    j++;
                    
                }
                else if(output[j] == output[j+1] && output[j] == 2){
                    res += '22';
                    j++
                }
                else if(output[j] == 1)
                    res += '11';
                else if(output[j] == 2)
                    res += '12';
            }
        }
        if(res)
            output = res;
    }
}
console.log(output);