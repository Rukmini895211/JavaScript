	// Given an array of numbers and a target sum, find two numbers in the array that add up to the target and return their indexes!
	// Input: arr = [2, 7, 11, 15], target = 9
	// Expected Output: [0, 1] (2 + 7 = 9)
	
	let arr = [8, 12, 5, 2, 10, 17], target = 15;
	let output = [];
	
	for(var i = 1; i<arr.length; i++){
	    if(output.length <=0){
	        for(var j = 0; j<arr.length; j++){
	            if(arr[i]+ arr[j] == target){
	                output = [i, j];
	                break;
	            }
	        }
	    }
	}
	console.log(output);
