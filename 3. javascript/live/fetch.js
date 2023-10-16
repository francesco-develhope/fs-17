/* fetch('https://jsonplaceholder.typicode.com/todos/')
.then(res => res.json())
.then(val => console.log(val))
.catch(error => console.error(error)) */


//Async / await fetch
/* async function asynFetch(){
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await result.json();
    console.log(data);
    return data
  } catch (error) {
    console.log(error)
  }
}
asynFetch() */

//Check the status
/* fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((res) => {
    if(res.status === 200){
    return res.json();
    } else {
      throw new Error('This an error')
    }
  })
  .then(val => console.log(val))
  .catch(error => console.error(error)) */