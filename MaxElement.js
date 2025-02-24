let arr = [7,46,8,2,9,35,97,25];
let maxEle = 0;

for(var i=0; i < arr.length; i++){
    if(maxEle < arr[i])
        maxEle = arr[i];
}
console.log(maxEle);
