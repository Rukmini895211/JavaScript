let arr = [3,5,2,7,9];
let n = 3;
for ( var i = 0; i < n; i++){
    const swap = arr[arr.length-1];
    for(var j=0; j < arr.length; j++){
        
        if( j == arr.length-1){
            arr[arr.length-1-j] = swap;
            break;
        }
            
            
        arr[arr.length-1-j] = arr[arr.length-2-j];
    }
}
console.log(arr);
