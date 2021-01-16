const capitalize = function (string) {
	let Arr = string.split(" ")
	let NewArr = Arr.map(word => {
		const NewWord = word[0].toUpperCase() + word.slice(1);
		return NewWord
	})
	console.log(NewArr.join(" "));
}
capitalize("the quick brown fox");
