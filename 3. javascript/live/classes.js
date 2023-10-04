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
    #courses;

    constructor(name, surname, age,){
        super (name,surname,age);
    }

        get courses(){
        return this.#courses;
    }
    set courses(courseToAdd){
        this.#courses = courseToAdd;
    }
    
    addCourses(arr);


}

const student=new Student('Mario','Rossi','26')
console.log(student);
/* const student= new Student('Mario','Rossi','26',new Date('2024-05-18'), ['math']);
console.log(student.graduationTimestamp);
student.addCourses(['science','italiano']
console.log(student.courses) */