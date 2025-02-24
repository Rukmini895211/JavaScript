let n = 17826;
let rem = 0, res = 0;
	
while(n>0){
    rem = n%10;
    n = Math.floor(n/10);
    res = res*10+rem;
}
	
console.log(res);
