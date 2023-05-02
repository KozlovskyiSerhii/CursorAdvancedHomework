export class Student { 
   #marks
   constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.#marks = [5, 4, 4, 5];
      this.dismiss = false;
   }
   getInfo() {
         return `Студент ${this.course}го курсу ${this.university} м.Одеса, ${this.fullName}`;
   }


   getAverage() {
      if (this.dismiss) {
         return null
      } else {
         const sumMarks = this.#marks.reduce((prevValue, item) => prevValue + item, 0);
         const averageMark = (sumMarks / this.#marks.length).toFixed(1);
         return averageMark;
      }
   }

   dismissed() {
      this.dismiss = true;
      console.log('студента виключили')
   }

   recover(){ //відновить щасливого студента
      this.dismiss = false;
      console.log('студента поновили')
   }


   get getMarks(){
      if (this.dismiss !== true) {
         return this.#marks
      } else {
         return null;
      }
   }

   set addMarks(value){  //якщо студент не виключений,доставить йому оцінку до масиву оцінок
      if (this.dismiss !== true) {
         return this.#marks.push(value) 
      } else {
         return null;
      }
   }
}



// let student = new Student("Національний Університет Львівська Політехніка", 3, "Козловський Сергій Олександрович");


// //інформація про студента
// console.log(student.getInfo());
// //поставимо студенту оцінку

// student.addMarks = 5;
// console.log(student.getMarks);

// //середня оцінка студента
// console.log(student.getAverage());


// student.dismissed();
// console.log(student.getAverage()); //студента відрахували

// student.recover();
// console.log(student.getAverage()); //здав комісію на 3


// // наслідування 

// class BudgetStudent extends Student{
//    constructor(university, course, fullName) {
//       super(university, course, fullName); //метод super, запускає батьківський клас тут
//       setInterval(() => {this.getScholarship()}, 30000); //інтервал запуску, 1000мс=1с
//    }
//       getScholarship(){
//          if (this.getAverage() >= 4 && !this.dismiss) {
//             console.log(this.getAverage())
//          console.log('Ви отримали 1400 грн. стипендії');
         
//          } else {
//             console.log('Ви неотримаєте 1400 грн. стипендії');
//       }}
// }

// const budgetStudent = new BudgetStudent("Вищої Школи Психотерапії", 1, "Остап Родоманський Бендер");
   
// // budgetStudent.dismissed();якщо вигнали стипендії не матиме
// // budgetStudent.addMarks = 1; погані оцінки туди ж
// console.log(budgetStudent.getMarks); 
// budgetStudent.getScholarship();