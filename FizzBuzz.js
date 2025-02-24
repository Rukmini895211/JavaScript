// Write a function that returns a string, such as, For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."
// Input: 15
// Expected Output: "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"

let num = 15;
let output = '';
for(var i = 1; i<=15; i++){
    if((i%3 == 0) && (i%5 == 0)){
        output += 'FizzBuzz ';
    }
    else if(i%3 == 0){
        output += 'Fizz ';
    }
    else if(i%5 == 0){
        output += 'Buzz ';
    }
    else
        output = output+i+ ' ';
}
console.log(output);