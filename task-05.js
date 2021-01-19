// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. 
// Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, 
// если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function(message) {
// 	let messageLow = message.toLowerCase()
// 	if (messageLow.includes('spam')){
// 		return true
// 	} else if(messageLow.includes('sale')){
// 		return true
// 	}
// 	return false
// }
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// Через ?:

const checkForSpam = function (message) {
  let messageLow = message.toLowerCase();
  let result = messageLow.includes("spam")
    ? true
    : messageLow.includes("sale")
    ? true
    : false;
  return result;
};
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));

