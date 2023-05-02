export const person = [{
   name: "Tanya",
   course: 3,
   subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
}
}, {
   name: "Victor",
   course: 4,
   subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
}
}, {
   name: "Anton",
   course: 2,
   subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
}
   }];
//Повертає список предметів для конкретного студента. Назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл:

  export function getSubjects(student = person[0]) {
      const subjects = Object.keys(student.subjects)
      const subjectList = subjects.map((item) => {
         return item.toUpperCase().slice(0, 1) + item.toLowerCase().slice(1).replaceAll('_', ' ');
      });
      return subjectList;
   }
   // console.log('Повертає список предметів для конкретного студента. Назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл:', getSubjects().join(', '), '\n\n');

// //рахує середню оцінку зі всіх предметів для окремого студента

//    function getAverageMark(student = students[0]) {
//       const arr = Object.values(student.subjects).flat();
//       const sumMark = arr.reduce((prevValue, item) => prevValue + item, 0);
//       return (sumMark / arr.length).toFixed(2);
//    }

// console.log('Середня успішність студента :', getAverageMark(students[0]), '\n\n');

//    function getStudentInfo(student) {
//    const { name, course } = student;
//    const averageMark = getAverageMark(student);
//    return { name, course, averageMark: averageMark};
//    }
// console.log('Інформація про студента і середня успішність: ', getStudentInfo(students[0]), '\n\n');

// // console.log(getStudentInfo(students[1]));
// // console.log(getStudentInfo(students[2]));

// //сортує студентів за іменем в алфавітному порядку 
//    const getStudentsNames = student => {
//       const studentNames = Object.keys(student).map((key) => {
//          return student[key].name;
//       });
//       return studentNames.sort();
//    };

// console.log('список студентів в алфавітному порядку ', getStudentsNames(students).join(', '), '\n\n');

// //вивід найкращого студента на основі середньої оцінки по всіх предметах
// function getBestStudent(students) {
//   let bestStudent;
//   let bestAverage = 0;
//   students.forEach(student => {
//     let average = getAverageMark(student);
//     if (average > bestAverage) {
//       bestAverage = average;
//       bestStudent = student.name;
//     }
//   });

//   return bestStudent;
// }
// console.log('The name of the best student : ', getBestStudent(students), '\n\n');

// function calculateWordLetters(word) {
//    const delSpaceWord = word.replaceAll(' ', '');
//   const letters = {};
//   for (let i = 0; i < delSpaceWord.length; i++) {
//     const letter = delSpaceWord[i];
//     if (letters[letter] !== undefined) {
//       letters[letter]++;
//     } else {
//       letters[letter] = 1;
//     }
//   }
  
//   return letters;
// }
// console.log(calculateWordLetters('test or not or yes or not'));

