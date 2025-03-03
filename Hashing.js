// Write a function named findIndex that gets a string s and character c and 
// returns the index of the first occurrence of c in s, if it does not exist, return -1.

// Example:
// test, s -> 2 Because character s appears first time at index 2

findIndexOf = (s, c) => {
    return s.indexOf(c);
  }
  // O(n)
  console.log(findIndexOf("test", "s"))
  
  
  findIndexCharAt = (s, c) => {
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === c) return i;
    }
    return -1;
  }
  // O(n)
  console.log(findIndexCharAt("test", "s"))
  
  // ----------------------------------------------------------------------------
  findIndexHashing = (str) => {
    debugger
    let charmapObject = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      // check if that alphabet is already in our charmapObject
      if ((char in charmapObject)) {
        charmapObject[char].push(i);
        console.log('test   ', charmapObject);
      } else {
        charmapObject[char] = [];
        console.log('test   ', charmapObject);
      }
    }
    
    return charmapObject;
  }
  
  findIndexWithHashing = (c) => {
    return charIndexMap[c] ?? "none";
  }
  
  
  // O(n) (build) + O(1) (search)
  let charIndexMap = findIndexHashing("testtte");
  console.log(findIndexWithHashing("e")); // Output: 1
  console.log(findIndexWithHashing("t")); // Output: [0, 3, 4, 5, 6]
  console.log(findIndexWithHashing("x")); // Output: -1 (not found)