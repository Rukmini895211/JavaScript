let str ='abba'
let res = [];
for(var i=0;i<str.length;i++){
    for(var j = i+1; j<=str.length; j++){
        let str1 = str.slice(i,j);
        if(str1.split('').reverse().join('') == str1)
        res.push(str1);
    }
}
console.log(res.length);