//найбільше число з будь якого введеного цілого числа
function getMaxDigit(number) {
  let maxNum = 0;
  while (number > 0) {
    const currentNum = number % 10;
    if (currentNum > maxNum) {
       maxNum = currentNum;
       console.log(currentNum)
    }
    number = Math.floor(number / 10);
  }
  return maxNum;
}
let y = +prompt()
let x = getMaxDigit(y);
console.log(x);


// function for change the first letter on the name 
function changeName(name) {
   let leter = name.toLowerCase();
   let littleLetter = leter.slice(1);
   let firstLeter = name[0];
   let bigLeter = firstLeter.toUpperCase();
   return (bigLeter + littleLetter)
}
changeName('sErhii');
console.log(changeName('sErHii'));