// Highest scoring word
	str = 'man i need a taxi to fizz';
	str = str.split(' ');
	
	counts = str.map((word) => {
	    count = 0;
	    for(var i=0;i<word.length;i++){
	        count += word[i].charCodeAt(0)-96;
	    }
	    return count;
	});
	const maxIndex = counts.reduce((maxIdx, curVal, currInd, counts) => {
	  return curVal > counts[maxIdx] ? currInd : maxIdx;
	}, 0);
	console.log(str[maxIndex]);

	// (Or)

	// const maxValue = Math.max(...counts); // Find the maximum value in the array
	// const maxIndex = counts.indexOf(maxValue);
	
	// console.log(str[maxIndex]);
