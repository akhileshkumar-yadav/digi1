//  type of  function in js
// 1 user defined functions
// 2built in functions


//  syntax for user defined functions

//  function functionName () {
//  code execute 
// }

//  function call
// functionName

// non parameterized function
function greet() {
    console.log("hello world");
};
greet();

// parameterized function
function greet(name) {
    console.log("hello " + name);
};
greet("sachin");


// ------------------------------------------------------------------------

// function fun (a,b) {
//     return a + b;
// }
// const sum = fun(2,5);
// console.log("sum :" , sum );

// without return statement
function addNum (a,b){
    console.log(a+b);
};

num = addNum (10,20)
console.log(num);

// return statement

function addNum (a,b){
    return a+b;
};

num = addNum (20,20)
console.log(num);


console.log("----------------------------------------------------------------------------------------------");

function square (num){
    return num ** 2;
}
// function call
// functionName
  console.log(square(5));

  function power (num,power) {
    return num ** power;
  };
  console.log(power(2,3));
  console.log("----------------------------------------------------------------------------------------------");

//    arrow function
   
// const functionName = () => {
    // code execute
// }


// const even = (num) =>{
//     if(num%2==0){
//         console.log("even");
        
//     }
// } 

//     for(let i = 1; i<=num;i++){
//         if(i%2===0){
//             console.log(i, "even");
//         }
//         else{
//             console.log(i, "odd");
            
//         }
//     }
// };

// even(100);

let str = (str) => {
    for (let i = 0; i < str.length; i++) {
        
        
        const element = str[i];
        console.log(element);
        
    }
    console.log(str.length);
}

str("akhileshyadav");
  
   

