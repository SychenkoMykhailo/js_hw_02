const rgbToHex = function(r, g, b){
	function elemToHex (elem){
		if(elem>15){
			return elem.toString(16)
		}
		return "0" + elem.toString(16)
	};
	return "#"+elemToHex(r)+elemToHex(g)+elemToHex(b)
};
console.log(rgbToHex(255, 160, 120));

// Скажи, пожалуйста, почему не работает такая запись:

// const rgbToHex = function(r, g, b){
// 	let arr = [r, g, b].forEach(elem => {
// 		if(elem>15){
// 			return elem.toString(16)
// 		}
// 		return "0" + elem.toString(16)
// 	})
// 	return "#" + arr
// };
// console.log(rgbToHex(255, 160, 120));