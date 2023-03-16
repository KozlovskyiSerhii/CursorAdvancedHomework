const getDividedByFives = [6, 2, 55, 11.1, 78, 2, 55.1, 77, 57, 87, 23, 2, 56, 25 , 45, 5, 85, 95, 5, 35, 25, 20, 40, 50, 100, 3, 2, 43, 34, 36, 86, 89, 23, 12, 15, 10, 1, 44, 46
];
const number = [0.1, 1, 2, 4, 17, 11, 9, 2.2, 1.4, 98, 76, 20, 24.5, 13.4, 3, 11, 6, 8, 16, 191];
	


//функція виводить числа кратні 5
function getDividedByFive(array){
	const getDivided = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 5 === 0) {
			getDivided.push(array[i])
		}
	}
	return getDivided;
}


//функція виводить числа кратні 5
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



//рахує медіану
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


// виводить масив випадкових чисел із заданою кількістю елементів, та гранрицями мін і макс значення
function getRandomArray(length, min, max){
	const getRandomArrays = [];
	let x = max;
	max = min;  // якщо мінімальне і максимальне введено не вірно, поміняє мін і макс
	min = x
	for (let i = 0; i < length; i++){
		let randNumb = (Math.round(Math.random() * (max - min)) + min);
	getRandomArrays.push(randNumb);
	}
	return getRandomArrays.sort((a, b) => a - b);
};
console.log(getRandomArray(40, 2000, 5));



//рахує кількість чисел більших від нуля в масиві
const numberMin = [-1, -4, 5, 6, 7, 0, -8, 9, -2];
	function countPositiveNumbers(array){
	const int = array.filter((item) => item > 0);
	return int.length;
};
console.log(countPositiveNumbers(numberMin));



function generateCombinations(string) {
   if (string <= 10) {
      if (string.length === 1) {
         return [string];
      }
      const result = [];
      for (let i = 0; i < string.length; i++) {
         const letter = string[i];
         //console.log('letter', letter)
         const cutLetter = string.slice(0, i) + string.slice(i + 1);
         const combinations = generateCombinations(cutLetter);
         //console.log('combination', combinations)
         combinations.map((combination) => {
            result.push(letter + combination);
         });
      }
      return result;
   }  else {
   return alert('слово занадто довге для комбінування ')
}
}
console.log(generateCombinations('aaadвввіввлфілдфіьсфі'));

//заміна емоційної лексики на зірочки
let x = 'fucking ngbictfuck sucking fucking hstufuckyourself vpidisd idiots russian pidarashn '

function changeWord(string) {
  const badWord = ["fuck", "shit", "suck", "idiot", "russian", "pidar"];
  let stringWithoutBadWords = string;
  for (let i = 0; i < badWord.length; i++) {
     const splitString = stringWithoutBadWords.split(badWord[i]);
   //   console.log('split string', splitString);
    stringWithoutBadWords = splitString.join('*'.repeat(badWord[i].length));
  }
  return stringWithoutBadWords;
}

console.log(changeWord(x))
//виведення непарних цілих чисел
function filterEvenNumbers(array) {
   const evenNumb = array.filter((item, index) => Number.isInteger(item) && item % 2 !== 0);
   // const evenNumb = integer.filter((item) => item % 2 !== 0)
   return evenNumb;
}
console.log(filterEvenNumbers(number));