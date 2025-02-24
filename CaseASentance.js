let str1 = "hello world this is chitti memory 1gb";
str1 = str1.split(' ');

for(var i=0; i < str1.length; i++){
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
}
console.log(str1.join(' '));
