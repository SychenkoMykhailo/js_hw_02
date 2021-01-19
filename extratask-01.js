const capitalize = function (string) {
	let Arr = string.split(" ")
	let NewArr = Arr.map(word => {
		const NewWord = word[0].toUpperCase() + word.slice(1);
		return NewWord
	})
	console.log(NewArr.join(" "));
}
capitalize("the quick brown fox");

// Через цикл:
// const capitalize = function (string) {
//   let arr = string.split(" ");
//   let newarr = [];
//   for (let elem of arr) {
//     let word = elem[0].toUpperCase() + elem.slice(1);
//     newarr.push(word);
//   }
//   console.log(newarr.join(" "));
// };
// capitalize("the quick brown fox");
