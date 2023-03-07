
//найбільше число 
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
// let y = +prompt()
// let x = getMaxDigit(y);
// alert(x);