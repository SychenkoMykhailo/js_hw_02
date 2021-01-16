const nonUniqueElements = function (arr) {
	let res = arr.filter(function (elem, index, array) {
		let total = 0;
		for (index of array) {
			if (index == elem){
				total +=1
			}
		}
		return total > 1;
	})
	return res
}
console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([1, 2, 3, 4, 5]));
console.log(nonUniqueElements([5, 5, 5, 5, 5]));
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]));