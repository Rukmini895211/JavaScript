var n=4;
for(var i=0;i<n;i++){
    let pat = '';
    for(var j=0;j<i;j++){
        pat += ' ';
    }
    for(var j=0;j<n;j++){
        pat += '*';
    }
    console.log(pat);
}