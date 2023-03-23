const obj = {
   name: "Andrii",
   surname: 'Kozlovskiy',
   age: 32,
   skills: {
      soft: ['inteligence'],
      hard : ['HTML', 'CSS', 'JS']
   } 
};
// obj.name = 'A';
// delete obj.age;
const arr = ['first', 'second'];
console.log(obj);
console.log(obj['full name'])
console.log('age' in obj);
function createUser(name, surname) {
   return {
      name,
      surname,
      isAdmin: false
   }
}
const user = createUser('Serhii', 'Kozlovskyi')
console.log(user);

// for (let key in obj) {
//    console.log(obj[key]);//значення до значення, key якщо до ключів
// }
const res = Object.keys(obj) //виводить ключі обєкту
// const res = Object.values(obj) // значення
// const res = Object.entries(obj) // масив ключ значення

// console.log(res);
// console.log(obj.skills.hard[0]);
// const obj2 = {}
// for (let key in obj) {
//    obj2[key] = obj[key];//копіювання перебором, копіює лише перший рівень вкладеність ні
// }
// console.log(obj2);
// Object.assign(obj2, obj);
// obj.age = null;
// console.log(obj2);
const obj2 = Object.assign({}, obj);
console.log(obj2);
// const objN = {
//    name: "Andrii",
//    surname: 'Kozlovskiy',
//    sayHello: function () {
//       console.log(`Hello i am ${objN.name}`);
//    }
// }
// const objN = {
//    name: "Andrii",
//    surname: 'Kozlovskiy',
//    sayHello(greatings = 'Hello, ') {
//       console.log(`${greatings} i am ${this.name}`);
//    }
// }
//так не працює, не та вкладеність, зіс не бачить
// const objN = {
//    name: "Andrii",
//    surname: 'Kozlovskiy',
//    sayHello(greatings = 'Hello, ') {
//       const handleHello = function() {
//          console.log('це імя', this.name)
//       }
//       handleHello();
//    }
// }

objN.sayHello();
//стрілочна працює чудово
const objN = {
   name: "Andrii",
   surname: 'Kozlovskiy',
   sayHello(greatings = 'Hello') {
      const handleHello = () => {
         console.log(`це імя, ` + this.surname)
      }
      handleHello();
   }
}

objN.sayHello();





// const arr = ['ass_assault', 'food_factory'];
// function changeFirstLetter(array) {
//   return array.map((str) => {
//     const bigLetter = str.charAt(0).toUpperCase() + str.slice(1);
//     return bigLetter.replace(/_/gi, " ");
//   });
// } 
// console.log(changeFirstLetter(arr));
