// Write a function named isTripletExists that gets an array of integers arr and an integer k and returns true if there is a triplet of numbers (3 numbers) which sum to k else return false.
//Input = [1, 3, -9, 14, 19, 7] , k=11
arr = [2,3,4,7,1] , k=9
arr = arr.sort((a,b) => a-b);
console.log(arr);

let count = 0;
n = arr.length;
res = false;
	
for(var i = 0; i<n;i++){
    right = n-1;
    left = i+1;
    
    if(arr[i]+arr[right]+arr[left] == k){
        res = true;
    } else if(arr[i]+arr[right]+arr[left] > k){
        
        while(right >= 0){
            if(arr[i]+arr[right]+arr[left] == k){
                res = true;
            }
            right--;
        }
    } else {
        while(left < n){
            if(arr[i]+arr[right]+arr[left] == k){
                res = true;
            }
            left++;   
        }
    }
	if(res) break;
}
console.log(res);
