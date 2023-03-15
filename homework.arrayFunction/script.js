const getDividedByFives = [6, 2, 55, 11.1, 78, 2, 55.1, 77, 57, 87, 23, 2, 56, 25 , 45, 5, 85, 95, 5, 35, 25, 20, 40, 50, 100, 3, 2, 43, 34, 36, 86, 89, 23, 12, 15, 10, 1, 44, 46
];
const number = [0.1, 1, 2, 4, 17, 11, 9, 2.2, 1.4, 98, 76, 20, 24.5, 13.4, 3, 11, 6, 8, 16, 191];
	//функція з фільтром на діляться що діляться на 5 через 'for'
function getDividedByFive(array){
	const getDivided = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 5 === 0) {
			getDivided.push(array[i])
		}
	}
	return getDivided;
}
//функція з фільтром на діляться що діляться на 5
function getDividedByFiveFilter(array) {
	const int = array.filter((item, index, arr) => item % 5 === 0);
	return int;
}
console.log(getDividedByFiveFilter(getDividedByFives));
console.log(getDividedByFive(getDividedByFives));
	

	// сумує всі числа
function result(array) {
	const int = array.filter((item, index) => Number.isInteger(item));
	console.log(int);
	const sumInt = int.reduce((prevValue, item) => prevValue + item, 0);
	console.log(sumInt)
  return sumInt / int.length;
}
console.log(result(number));

function getMedian(array) {
	const int = array.filter((item, index) => Number.isInteger(item));
	const intSort = int.sort((a, b) => a - b);
	console.log(intSort)
	const a = int.length;
	console.log('a', a)
	if (a % 2 === 0) {
		// console.log('intSort[a/2]', intSort[a/2])
		// console.log('intSort[a/2 + 1]', intSort[a/2 + 1])
		return ((intSort[a/2 - 1]+intSort[a/2])/2)
	} else {
		return intSort[Math.floor(a / 2)];
	}
}
console.log(getMedian(number));




const arr = ['spider-man', 'Iron-man', 'Capitan America'];
const numbers = [1, 12, 14, 15, 51, 57, 77];

// arr.forEach(function (item, index, arr){
//    console.log(item)

// });
// const avan = [];
// arr.forEach((item, index, arr) => {
//    avan.push(item + ' _+_++ ' + 0);
// 	console.log(item);
// 	console.log(avan);
// });

//
// arr.map((array) => {
//    console.log(array)
// })
// const res = arr.map((array, i) => {
// 	const str = `${i + 1}, ${array}`;
// 	return str;
// })
//фільтрує за наявністю рисочки в елемнті масиву. якщо є риска повертає тру, якщо ні фолс. при тру записує в результуючий масив.
// const les = arr.filter((array) => {
// 	return array.includes('-')
// });
// console.log(les)

// const getDividedByFives = getDividedByFive.filter((array) => {
// 	return array.includees()
// })
