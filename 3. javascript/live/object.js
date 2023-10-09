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


/*Destrutturazione Oggetto

function objectCasual (obj) {
    const {name, surname, age} = obj
    console.log(name,surname, age)
}

//const value = {name: "Simone", age : 34}
//objectCasual(value)

objectCasual ({name: "Simone", surname : "Rossi", age : 34}) 
*/