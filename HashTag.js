// // HashTag
// str = 'man i need a taxi to fizz';
// if(str.length > 100)
//     console.log("invalid string");
// else{
//     str = str.split(' ');
//     str = str.map((word) => word.charAt(0).toUpperCase()+word.slice(1));
//     str = '#'+ str.join('');
//     console.log(str);
// }

// (or)


str = 'man i need a taxi to fizz';
if(str.length > 100)
    console.log("invalid string");
else{
    str = str.split(' ').reduce((tag,word) => tag+ word.charAt(0).toUpperCase()+word.slice(1), '#');
    console.log(str);
}
