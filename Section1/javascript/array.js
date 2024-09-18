 const fruits = ["apple" , "banana","lichhi","orange","mango"];
console.log(fruits);

console.log("-------------------------------------------- Array Method --------------------------");
//  push() - add element at the end of the array
// pop()- remove element from the end of array
// unsift()- add element at the beginning of the array
// shift() - remove element at the beginning of the array
// slice() -  extract a portion of an array
// splice() - add/remove element from the array
// indexOf() -  find the index of an element 
// concate()-merge two arrays
// join() - to convert array into string
// foreach()- loop through the array
// map() - create a new array from an existing array
// filter()- create a new array with elements that pass a test 

// indexing and slicing

console.log(fruits[3]);
console.log(fruits[4]);
// console.log (Array.join(fruits));

console.log(fruits.slice(1,5));

let arr1 = ["apple","sumsung","vivo","redmi","relemi","motorola","nokia","mango","lava","jio"];
// console.log(arr1);
// console.log(arr1.slice(1,8));
// console.log(arr1.splice(1,8));
// console.log(arr1);

console.log(arr1.push("relince"));
console.log(arr1);

console.log(arr1.pop());
console.log(arr1);

console.log(arr1.unshift("samsung"));
console.log(arr1);

console.log(arr1.shift());
console.log(arr1);

let con = (arr1.concat(fruits));
console.log(con);

let A = [...arr1,...fruits];
console.log(A);

console.log(arr1.indexOf("vivo"));

console.log(arr1.includes("sumsung"));
console.log(arr1.splice(2,2,"pateto","tameto"));
console.log(arr1);



arr1.forEach((x) => {
    console.log(x);
})


const arr = [1,2,3,4,5,6,7,8,9,10];
let AR = [];
arr.forEach((x) => {
    if(x%2==0){
        AR.push(x);
    }
    
})
console.log(AR);

let Map = arr.map((x) => x**2)
console.log(Map);

const evenNum = arr.filter((x) => x%2==0)
console.log(evenNum);



























