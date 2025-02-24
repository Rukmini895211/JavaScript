let str = "Hi all i am feeling so hungry today";
str = str.split(' ');
// let LargestWord = '';
// for(let i = 0; i < str.length; i++){
//     if(str[i].length > LargestWord.length)
//     LargestWord = str[i];
// }

//(or)

// Use reduce to find the word with the maximum length
const LargestWord = str.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
}, "");
console.log(LargestWord);
//Note: array.reduce((accumulator, currentValue, index, array) => { // Logic to update the accumulator }, initialValue);
