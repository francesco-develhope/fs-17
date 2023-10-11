fetch('https://jsonplaceholder.typicode.com/todos/')
.then(res => res.json())
.then(val => console.log(val))
.catch(error => console.error(error))