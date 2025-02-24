let arr = [8,12,5,2,10,17];
let arr1 = [5,3,2,7,8,2,];
let output = [];

for(var i = 0; i<arr.length; i++){
    for(var j = 0; j<arr1.length; j++){
        if(arr[i] == arr1[j]){
            output.push(arr[i]);
            break;
        }
    }
}
console.log(output);
