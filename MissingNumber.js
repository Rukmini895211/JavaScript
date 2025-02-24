let arr = [1,2,3,4,5];
let n = 6;

for(var i=0; i < n; i++){
    if(i+1 != arr[i]){
        console.log(i+1 +" is missing");
        break;
    }
}