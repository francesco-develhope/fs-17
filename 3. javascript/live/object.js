let person = {
    name: 'stefan',
    age: 21
} 
/* console.log(person.name + " ha " + person.age + " anni"); */

/* person.name = 'Marco';
person.surname = 'Rossi';
delete person.name; */
let keys = Object.keys(person);

for(let key of Object.keys(person)){
    let value = person[key];
    console.log(value);
}