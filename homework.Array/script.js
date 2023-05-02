export const students = [
   "Олександр",
   "Ігор",
   "Олена",
   "Іра",
   "Олексій",
   "Світлана"
];

// const themes = [
//    "Диференційне рівняння",
//    "Теорія автоматів",
//    "Алгоритми і структури даних"
// ];
// const marks = [4, 5, 5, 3, 4, 5];

export const pairGB = (people) => {    //РОБИМО МАТРИЦЮ З ПАРАМИ СТУДЕНТІВ 
   const pairGAndB = []; 
   pairGAndB.push([people[0], people[2]]);
   pairGAndB.push([people[1], people[3]]);
   pairGAndB.push([people[4], people[5]]);
   return pairGAndB;
}


// const topicForPair = (pairGB, topic) => {   //теми для пар, пари через і
//    const topicForPairs = [];
//    const studentString = [];
//    for (let i = 0; i < pairGB.length; i++) {
//       const pair = pairGB[i].join(" і ");
//       studentString.push(pair);
//    } 
//    for (let j = 0; j < topic.length; j++) {
//       topicForPairs.push([studentString[j], topic[j]]);
//    }
//       return topicForPairs;
// }

// function writStud(topicForPairs){
//    const writsStud = [];
//    for (let i = 0; i < topicForPairs.length; i++) {
//       const a = topicForPairs[i].join(" : ");
//       writsStud.push(a);
//    }
//    return writsStud.join("<br>");
// }



// const studentMark = (people, mark) => {    //РОБИМО МАТРИЦЮ З ПАРАМИ СТУДЕНТІВ 
//    const studentsMark = [];
//    for (let i = 0; i < people.length; i++) {
//       // const x = ([people[i], mark[i]]).join(" - ")
//       studentsMark.push([people[i], mark[i]]);
//    }
//    return studentsMark;
// }
// // randomWord = randomWords*(Math.floor(Math.random()*X(кількість потрібних чисел)))


// const randomMarkForPair = (topicForPair) => { 
// const randomMarkForPairs = [...topicForPair] ;
// for (let i = 0; i < randomMarkForPairs.length; i++) {
//    randomMarkForPairs[i].push(Math.floor(Math.random() * 5 + 1));
// }
//    return randomMarkForPairs;
// }
// const x = pairGB(students);
// const y = topicForPair(x, themes);
// const z = studentMark(students, marks);
// const h = randomMarkForPair(y);

// document.writeln(`<h2>Пари студентів:</br> ${x.join("</br>")}</h2>`);
// document.writeln(`<h2>Пари студентів та їхня тема:</br> ${topicForPair(x, themes).join("</br>")}</h2>`);
// document.writeln(`<p>оцінки студентів:</p> </br> <p>${studentMark(students, marks).join("</br>")}</p>`);
// document.writeln(`<p>оцінки пар студентів  :</p> </br> <p>${h.join("</br>")}</p>`);

// //сортування хлопців та дівчат і роподіл їх на пари

// const newArray = ['Аня', 'Катя', 'Олена', 'Ганна', 'Просковія', 'Параска', 'Іван', 'Сергій', 'Андрій', 'Ігор', 'Петро', 'Алла']
// function sortBoyGirl(array) {
//    const boy = [];
//    const girl = [];
//    for (let i = 0; i < array.length; i++){
//    if (array[i].slice(-1) === 'а' || array[i].slice(-1) === 'я') {
//       girl.push(array[i]);
//    } else {
//       boy.push(array[i]);
//    }
//    }
//       return  newAr = [boy, girl]
// }
// const t = sortBoyGirl(newArray)


// function shakeGirlBoy(array) {
//    const shakeGB = []
// for (let i = 0; i < array[0].length; i++){
//       shakeGB.push([array[0][i], array[1][i]].join(" і "))
//       }
//    return shakeGB;

// }
// console.log(shakeGirlBoy(t));