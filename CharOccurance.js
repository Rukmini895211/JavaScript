let word = "programming";
let result = {};

for(var i=0; i<word.length; i++){
    if(word[i] in result){
        result[word[i]] += 1;
    }
    else{
        result[word[i]] = 1;
    }
}
console.log(result);
