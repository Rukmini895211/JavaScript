	// Given an array of integers, find the total number of continuous subarrays whose sum equals a specific target, K.
	// Input: [1, 1, 1], 2
	// Expected Output: 2 (The subarrays are [1, 1], [1, 1])
	
	let arr = [1, 2, 3, 4];
	let k = 5;
	let count = 0;
	
	for(var i = 0; i<arr.length-2;i++){
	
	    if(arr[i]+arr[i+1]+arr[i+2] == k)
	        count++;
	
	}
	console.log(count);
