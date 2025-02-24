// let str ="hello this is rukmini";
// let count = 0;
// for(var i=0;i<str.length;i++){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ){
//         count++;
//     }
// }
// console.log(count);

// (or)


let str ="hello this is rukmini";
let vowels = ['a','e','i','o','u'];
let count = 0;
for(var i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        count++;
    }
}
console.log(count);