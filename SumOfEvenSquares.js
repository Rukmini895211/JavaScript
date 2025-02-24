let arr = [2,6,5,8,1];
let sum = arr.filter(num => num%2==0).map(num => num**2).reduce((sum,num) => sum+num, 0);
console.log(sum);