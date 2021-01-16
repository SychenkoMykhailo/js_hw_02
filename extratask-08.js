const median = function (arr) {
	let i = (arr.length / 2);
	if (arr.length % 2 == 1) {
		console.log(arr[i - 0.5]); 
	} else {
		console.log((arr[i - 1] + arr[i])/2);
	}
}
median([1, 2, 3, 4, 5]);
median([3, 6, 10, 15, 20, 99]);