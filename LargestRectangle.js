//Largest Rectangle in Histogram
	
let arr = [2, 1, 5, 6, 2, 3];

let minHeight = 0, maxArea = 0;

for(var i=0;i<arr.length;i++){
    minHeight = arr[i];
    for(var j=i;j<arr.length;j++){
        minHeight = Math.min(minHeight, arr[j]);
        width = j-i+1;
        area = width * minHeight;
        maxArea = Math.max(maxArea,area);
    }
}

console.log(maxArea);
