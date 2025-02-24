let num = 10;
let n1 = 0;
let n2 = 1;
let n = 0;

for(var i = 2; i<num;i++){
    n = n1 + n2;
    n1 = n2;
    n2 = n; 
}
console.log(n);
