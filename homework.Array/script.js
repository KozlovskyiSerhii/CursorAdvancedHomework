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


const students = [
   "Олександр",
   "Ігор",
   "Олена",
   "Іра",
   "Олексій",
   "Світлана"
];

const themes = [
   "Диференційне рівняння",
   "Теорія автоматів",
   "Алгоритми і структури даних"
];
const marks = [4, 5, 5, 3, 4, 5];

const pairGB = (people) => {    //РОБИМО МАТРИЦЮ З ПАРАМИ СТУДЕНТІВ 
   const pairGAndB = []; 
   pairGAndB.push([people[0], people[2]]);
   pairGAndB.push([people[1], people[3]]);
   pairGAndB.push([people[4], people[5]]);
   return pairGAndB;
}
console.log(pairGB(students));
document.writeln(`<h2>Пари студентів:</br> ${pairGB(students).join("</br>")}</h2>`);

const topicForPair = (pairGB, topic) => {   //теми для пар, пари через і
   const topicForPairs = [];
   const studentString = [];
   for (let i = 0; i < pairGB.length; i++) {
      const pair = pairGB[i].join(" і ");
      studentString.push(pair);
   } 
   for (let j = 0; j < topic.length; j++) {
      topicForPairs.push([studentString[j], topic[j]]);
   }
      return topicForPairs;
}

// function writStud(topicForPairs){
//    const writsStud = [];
//    for (let i = 0; i < topicForPairs.length; i++) {
//       const a = topicForPairs[i].join(" : ");
//       writsStud.push(a);
//    }
//    return writsStud.join("<br>");
// }

document.writeln(`<h2>Пари студентів та їхня тема:</br> ${topicForPair(pairGB(students), themes).join("</br>")}</h2>`);

const studentMark = (people, mark) => {    //РОБИМО МАТРИЦЮ З ПАРАМИ СТУДЕНТІВ 
   const studentsMark = [];
   for (let i = 0; i < people.length; i++) {
      // const x = ([people[i], mark[i]]).join(" - ")
      studentsMark.push([people[i], mark[i]]);
   }
   return studentsMark;
}
// randomWord = randomWords*(Math.floor(Math.random()*X(кількість потрібних чисел)))
console.log(studentMark(students, marks))
document.writeln(`<p>оцінки студентів:</p> </br> <p>${studentMark(students, marks).join("</br>")}</p>`);


const randomMarkForPair = (topicForPair) => { 
const randomMarkForPairs = [...topicForPair] ;
for (let i = 0; i < randomMarkForPairs.length; i++) {
  let s = Math.floor(Math.random() * 3);
   randomMarkForPairs[i].push(Math.floor(Math.random() * 3));
}
   return randomMarkForPairs;
}
document.writeln(`<p>оцінки пар студентів  :</p> </br> <p>${randomMarkForPair(topicForPair(pairGB(students), themes)).join("</br>")}</p>`);