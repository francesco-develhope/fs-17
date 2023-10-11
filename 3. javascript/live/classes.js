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
	#graduationTimestamp;

	constructor(name, surname, age,){
		super (name,surname,age);
	}

	get courses(){
		return this.#courses;
	}

	set courses(courses){
		this.#courses = courses;
	}

	get graduationTimestamp(){
		return this.#graduationTimestamp;
	}

	set graduationTimestamp(timestamp){
		this.#graduationTimestamp = timestamp;
	}
}   

const student=new Student('Mario','Rossi','26')
student.courses = ["math", "lingue"]
student.graduationTimestamp = new Date("2023-05-16")
console.log(student.courses);
console.log(student.graduationTimestamp);
