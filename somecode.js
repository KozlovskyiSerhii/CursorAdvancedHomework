function calc() {
  let result;
  const firstNum = parseFloat(prompt("Введіть перше число:"));
  const secondNum = parseFloat(prompt("введіть друге число:"));
  const operator = prompt("введеть дію (+, -, *, /):");
  
  switch(operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    default:
      return "будь ласка введіть коректний знак>";
  }
  
  return "результат: " + result;
}

console.log(calc());

// let array = [x, y];  //оголошення масиву
// array[0] = 'fgd'//заміна н-го елементу масиву
// arr[a, b, [c, f]]; arr[2][1] //иводить елемент з масиву в масиві
// array.length //довжина масиву
// let aray = [];
// aray.push("watermelon") //додати елемент до масиву вкінець.
// aray.unshift("fgh") //додати елемент до масиву з індексом 0
// arr.shift() //видаляє елемент з масиву з індексом 0
// arr.pop()  //видаляє останній елемент з масиву
// array.concat(aray, arr); //обєднує декілька масивів в один
// array.indexOf('a') //показує позицію елементу в масиві, якщо немає -1
// arr.join(separator) //виводить масив як стрінгу, замість сепаратора можна поставити знак розділення між елементами масиву
// arr.pop() //видаляє останній елемент масиву
// splice(номер елементу від якого починаємо рах, номер елементу до якого видаляємо, новий елмент, новий елемент 2..... )
// for (let i = 0; i < pairGB().length; i++){
//    console.log(pairGB()[i])
//    for (let j = 0; j < pairGB()[i].length; j++)
//       console.log(pairGB()[i][j])
// }
