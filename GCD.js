let n1 = 15;
let n2 = 90;
let pf1 = [], pf2 = [];

for(var i = 1; i<= n1; i++){
    if(n1%i == 0){
        pf1.push(i);
    }
}

for(var i = 1; i<= n2; i++){
    if(n2%i == 0){
        pf2.push(i);
    }
}

let output = [];
    
for(var i = 0; i<pf1.length; i++){
    for(var j = 0; j<pf2.length; j++){
            if(pf1[i] == pf2[j]){
                output.push(pf1[i]);
                break;
            }
        }
    }
console.log(output.sort(function(a,b){ return a-b; })[output.length-1]);
