export const getDividedByFives = [6, 2, 55, 11.1, 78, 2, 55.1, 77, 57, 87, 23, 2, 56, 25 , 45, 5, 85, 95, 5, 35, 25, 20, 40, 50, 100, 3, 2, 43, 34, 36, 86, 89, 23, 12, 15, 10, 1, 44, 46
];
// const number = [0.1, 1, 2, 4, 17, 11, 9, 2.2, 1.4, 98, 76, 20, 24.5, 13.4, 3, 11, 6, 8, 16, 191, 3, 5, 13, 15, 17, 19, 91, 93, 95, 97, 99, 101, 113, 115];
	


//функція виводить числа кратні 5
export function getDividedByFive(array){
	const getDivided = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 5 === 0) {
			getDivided.push(array[i])
		}
	}
	return getDivided;
}


// //функція виводить числа кратні 5
// function getDividedByFiveFilter(array) {
// 	const int = array.filter((item) => item % 5 === 0);
// 	return int;
// }


// console.log(`функція виводить числа кратні 5 :` + getDividedByFiveFilter(getDividedByFives).join('; ') +  "\n\n");
// // console.log(getDividedByFive(getDividedByFives)); //інший варіант
	

// 	//рахує середнє арифметичне

// function getAverage(array) {
// 	const int = array.filter((item, index) => Number.isInteger(item));
// 	const sumInt = int.reduce((prevValue, item) => prevValue + item, 0);
//    return (sumInt / int.length).toFixed(3);
// }
// console.log('рахує середнє арифметичне : ', getAverage(number), "\n\n");



// //рахує медіану

// function getMedian(array) {
// 	const int = array.filter((item, index) => Number.isInteger(item));
// 	const intSort = int.sort((a, b) => a - b);
// 	// console.log(intSort)
// 	const a = int.length;
// 	// console.log('a', a)
// 	if (a % 2 === 0) {
// 		// console.log('intSort[a/2]', intSort[a/2])
// 		// console.log('intSort[a/2 + 1]', intSort[a/2 + 1])
// 		return ((intSort[a/2 - 1]+intSort[a/2])/2)
// 	} else {
// 		return intSort[Math.floor(a / 2)];
// 	}
// }
// console.log('рахує медіану :', getMedian(number), "\n\n");


// // виводить масив випадкових чисел із заданою кількістю елементів, та гранрицями мін і макс значення

// function getRandomArray(length, min, max){
// 	const getRandomArrays = [];
// 	let temp = max;
// 	max = min;  // якщо мінімальне і максимальне введено не вірно, поміняє мін і макс
// 	min = temp
// 	for (let i = 0; i < length; i++){
// 		let randNumb = (Math.round(Math.random() * (max - min)) + min);
// 	   getRandomArrays.push(randNumb);
// 	}
// 	return getRandomArrays.sort((a, b) => a - b);
// };
// console.log('виводить масив випадкових чисел із заданою кількістю елементів, та гранрицями мін і макс значення:', getRandomArray(40, 2000, 5).join('; '), "\n\n");



// //рахує кількість чисел більших від нуля в масиві
// const numberMin = [-1, -4, 5, 6, 7, 0, -8, 9, -2];
// 	function countPositiveNumbers(array){
// 	const int = array.filter((item) => item > 0);
// 	return int.length;
// };
// console.log('рахує кількість чисел більших від нуля в масиві :', countPositiveNumbers(numberMin), "\n\n");


// //генерує купу слів

// function generateCombinations(string) {
// if (string.length <= 10) {
//       if (string.length === 1) {
//          return [string];
//       }
//       const result = [];
//       for (let i = 0; i < string.length; i++) {
//          const letter = string[i];
//          //console.log('letter', letter)
//          const cutLetter = string.slice(0, i) + string.slice(i + 1);
//          const combinations = generateCombinations(cutLetter);
//          //console.log('combination', combinations)
//          combinations.map((combination) => {
//             result.push(letter + combination);
//          });
//       }
//       return result;
//    }  else {
//    return console.log('слово занадто довге для комбінування ');
// }
// }
// console.log('генерує купу слів : ', generateCombinations('Lviv').join('; '), "\n\n");

// //заміна емоційної лексики на зірочки
// let x = 'Are fucking dearfuck sucking fucking FreeFuckyourself RiverFuck idiots russian pidarashn '

// function changeWord(string) {x
//   const badWord = ["fuck", "Fuck", "shit", "Shit", "suck", "idiot", "russian", "pidar"];
//   let stringWithoutBadWords = string;
//   for (let i = 0; i < badWord.length; i++) {
//      const splitString = stringWithoutBadWords.split(badWord[i]);
//    //   console.log('split string', splitString);
//     stringWithoutBadWords = splitString.join('*'.repeat(badWord[i].length));
//   }
//   return stringWithoutBadWords;
// }

// console.log('заміна емоційної лексики на зірочки :', changeWord(x), "\n\n")
// //виведення непарних цілих чисел
// function filterEvenNumbers(array) {
//    const evenNumb = array.filter((item, index) => Number.isInteger(item) && item % 2 !== 0);
//    // const evenNumb = integer.filter((item) => item % 2 !== 0)
//    return evenNumb;
// }
// console.log('виведення непарних цілих чисел :', filterEvenNumbers(number).join('; '), "\n\n");





