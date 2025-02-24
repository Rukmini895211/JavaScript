let arr = ['a', 'b', 'c', 'e'];
let start = arr[0].charCodeAt(0);

for(var i = 1;i<arr.length;i++){
    if(start == arr[i].charCodeAt(0) -1){
        start = arr[i].charCodeAt(0);
    }
    else{
        console.log(String.fromCharCode(arr[i].charCodeAt(0)-1));
        break;
    }
}