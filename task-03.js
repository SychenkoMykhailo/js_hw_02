// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'

const findLongestWord = function(string) {
	let strArr = string.split([' '])
	let longestwordlen = 0
	let longestword = null
	for (let i = 0; i < strArr.length; i += 1){
		if(strArr[i].length > longestwordlen){
			longestwordlen = strArr[i].length
			longestword = strArr[i]
		}
	}
	return longestword
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll')); 
console.log(findLongestWord('May the force be with you'));