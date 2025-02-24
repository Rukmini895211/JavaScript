let str1 = "listen";
let str2 = "slient";

str1 = str1.split('').sort().join('');
str2 = str2.split('').sort().join('');
if(str1 == str2)
    console.log("true");
else
console.log("false");