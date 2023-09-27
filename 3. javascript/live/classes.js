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
