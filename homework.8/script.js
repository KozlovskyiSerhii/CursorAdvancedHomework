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




class Student { 
   #marks
   constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.#marks = [5, 4, 4, 5];
      this.dismiss = false;
      // this.averageMark = 0
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

  dismissed() {
        this.dismiss = true;
    }

   recover(){ //відновить щасливого студента
      this.dismiss = false;
   }

}



let student = new Student("Вищої Школи Психотерапії", 1, "Остап Родоманський Бендер");


//інформація про студента
console.log(student.getInfo());
//поставимо студенту оцінку

student.addMarks = 5;
student.addMarks = 1;
student.addMarks = 1;
student.addMarks = 1;
console.log(student.getMarks);

//середня оцінка студента
console.log(student.getAverage());


student.dismissed();
student.addMarks = 1;
console.log(student.getMarks); //студента відрахували

student.recover();
student.addMarks = 3;
console.log(student.getMarks); //здав комісію на 3


// наслідування 

class BudgetStudent extends Student{
   constructor(university, course, fullName) {
      super(university, course, fullName); //метод super, запускає батьківський клас тут
      setInterval(() => {this.getScholarship()}, 30000); //інтервал запуску, 1000мс=1с
   }
      getScholarship(){
         if (this.getAverage() >= 4 && !this.dismiss) {
            console.log(this.getAverage())
         console.log('Ви отримали 1400 грн. стипендії');
         
         } else {
            console.log('Ви неотримаєте 1400 грн. стипендії');
      }}
}

const budgetStudent = new BudgetStudent("Вищої Школи Психотерапії", 1, "Остап Родоманський Бендер");
   
// budgetStudent.dismissed();якщо вигнали стипендії не матиме
// budgetStudent.addMarks = 1; погані оцінки туди ж
console.log(budgetStudent.getMarks); 
budgetStudent.getScholarship();