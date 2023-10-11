/*Sum async*/
/*
function sumAsync(val1, val2) {
	setTimeout(() => console.log(val1 + val2), 1000);
}

sumAsync(1, 5);*/


/*Sum async promise*/


/* function sumAsync(val1,val2) {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			  if (typeof(val2) === "number" && val2 > 0) {
			resolve(val1 + val2)
		} else {
			reject("Error")
	}
		}, 2000);
	  
})

}
sumAsync(8, 5)
	.then((value) => console.log(value))
	.catch((err) => console.log(err))
	

// First promise
let myPromise = new Promise ((resolve)=> {
	setTimeout(()=> {
	resolve ('Hello Promise!')
	}, 3000)
})

myPromise 
	.then((result)=> console.log(result)) */


// Promise Chaining
let mixedArr = ['marco', 24, 12, true, 87, 95]
function cleanArray(mixedArr) {
	return new Promise ((resolve) => {
		let cleaned = mixedArr.filter((item)=> typeof item === 'number')
		resolve (cleaned)
	}) 
} 

function filterEven(cleaned) {
	return new Promise ((resolve, reject) => {
		let evenNumbers = cleaned.filter((item) => item % 2 === 0)
		if(evenNumbers.length > 0) {
			resolve (evenNumbers)
		} else {
			reject("Array vuoto o altro")
		}
	})	
}



cleanArray(mixedArr)
	/* .then((result) => filterEven(result)) */
	.then(filterEven)
	.then((result)=>console.log(result))
