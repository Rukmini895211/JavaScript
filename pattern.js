function decodeString(s) {
    let stack = [];
    let currentNum = 0;
    let currentString = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === '[') {
            stack.push([currentString, currentNum]);
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            let [prevString, num] = stack.pop();
            currentString = prevString + currentString.repeat(num);
        } else if (/\d/.test(char)) {
            currentNum = currentNum * 10 + Number(char);
        } else {
            currentString += char;
        }
    }

    return currentString;
}

// Test the function
console.log(decodeString("3[a2[c]]"));