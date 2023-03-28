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
const ladder = {
maxSteps: 20,
  currentStep: 0,

  up: function () {
    if (this.currentStep >= this.maxSteps) {
      console.warn(
        "You achieved max steps for current ladder, you can't go up"
      );

      return this;
    }

    this.currentStep = this.currentStep + 1;

    return this;
  },

  down: function () {
    if (this.currentStep <= 0) {
      return this;
    }

    this.currentStep = this.currentStep - 1;

    return this;
  },

  info: function () {
    console.info("current step is: ", this.currentStep);

    return this;
  },
};
function generateBlocks() {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "250px";
  for (let i = 0; i < 25; i++) {
    const block = document.createElement("div");
    block.style.width = "50px";
    block.style.height = "50px";
    block.style.backgroundColor = getRandomColor();
    container.appendChild(block);
  }
  document.body.appendChild(container);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateBlocksInterval() {
  generateBlocks();
  setInterval(() => {
    const blocks = document.querySelectorAll("div > div");
    blocks.forEach(block => {
      block.style.backgroundColor = getRandomColor();
    });
  }, 1000);
}
generateBlocks();
getRandomColor();
generateBlocksInterval();
//let n = +prompt("input numder")

function factorial(n) {
   let result = 1;
   for (let i = 1; i <= n; i++){
      result *= i
   }
   return result;
}
// console.log(factorial(n));

function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

// alert( curriedSum(1, 2, 3) ); // 6, все ще можна викликати нормально
// alert( curriedSum(1)(2,3) ); // 6, каррінг першого аргументу
// alert(curriedSum(1)(2)(3)); // 6, повний каррінг



class Client { // обєкт
   #permission
            Інкапсуляція
   

   constructor(name, years_old, married_status, travelling_status) {
      this.count = 0;
      this.name = name;
      this.years = years_old;
      this.married = married_status;
      this.travelling = travelling_status;
      this.#permission = 'guest'
   }
   show_info() {
      this.count++;
      console.log(`${this.name} who is ${this.years} old whose married status is ${this.married} who travelling status is ${this.travelling}`); // метод
   }
   set change_permission(value){
      if (value == 'guest' || value == 'unauthorized user') {
         this.#permission = value;
         console.log('successfully changed!');
      } else {
         console.log('error');
   }
   }
   get change_permission(){
      console.log('warning');
      return this.#permission;
   }
}


let client = new Client('Mark', 26, true, false);
client.show_info()
client.change_permission = 'guest'
// client.change_name()
console.log(client.name)


