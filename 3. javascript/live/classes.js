class Person {
    constructor(name, surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    toString () {
        return `${this.name} ${this.surname}, ${this.age} anni ` 
    }
}


const person = new Person ("Marco", "Bianchi", 26)

console.log(person.toString())

class Student extends Person{
    constructor(name, surname, age, graduationTimestamp, courses){
        super (name,surname,age);
        this.graduationTimestamp=graduationTimestamp;
        this.courses = courses;
    }
    addCourses(arr){
        this.courses.push(...arr);
        
    }

}

const student= new Student('Mario','Rossi','26',new Date('2024-05-18'), ['math']);
console.log(student.graduationTimestamp);
student.addCourses(['science','italiano']);
console.log(student.courses)