//Welcome fetch
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
/*
fetch('https://api.api-ninjas.com/v1/exercises')
  .then((res) =>  {
    if(res.ok){
      return res.json();
    } else {
      throw new Error("error");
    }
  }) 

  .then(val => console.log(val))
  .catch(error => console.error(error.error))
  */

  //Check the content type
   fetch ("https://jsonplaceholder.typicode.com/") 
    .then((response) =>  { 
      const contentType = response.headers.get("content-type");
      if ((contentType.includes("application/json"))){
        return response.json()
      } else if ((contentType.includes("text/html"))) {
          return response.text()
      } else {
        throw new Error("not supported content-type") 
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error) )
