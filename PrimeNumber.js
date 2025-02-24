let num = 17;
let isprime=0;

for(var i=2; i < num/2; i++){
    if(num%i == 0)
        isprime++;
}
if(isprime>0)
    console.log("false");
else
console.log("true");