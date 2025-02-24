// let str = "hello";
	
// for(let i = 0; i < str.length; i++){

//     if(str[i] != str[str.length-1-i]){
//         console.log(str+" given number is not a palindrom");
//         return;
//     }
// }

// console.log(str+" given number is a palindrom");

//(or)

let str = "ngn";
let rev = str.split('').reverse().join('');
console.log(str == rev);

//toformate the string : 
str.toLowerCase().replace(/[^a-z0-9]/g,'');
//Or
// Char.charCodeAt(0);
// Return (
//     (code >=48 && code<=57) ||  // numbers
//     (code >= 97 && code<=122) // small letters
// )

//Note: for capital letters 65-90
