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