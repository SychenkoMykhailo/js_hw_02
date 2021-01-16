const countVowels = function (string) {
	const stringLow = string.toLowerCase()
	const arr = stringLow.split("");
	let result = 0;
	for (let elem of arr){
		const Vowels = ["a", "e", "i", "o", "u", "y"]
		if (Vowels.includes(elem)) {
			result += 1	
		}
	}
	console.log(result);
}
countVowels("the quick brown fox");


