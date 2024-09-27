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

// let str = (str) => {
//     for (let i = 0; i < str.length; i++) {
        
        
//         const element = str[i];
//         console.log(element);
        
//     }
//     console.log(str.length);
// }

// str("akhileshyadav");

//   Ternary oprator

// let age = 40;
// let result = age >= 18 ? age>30 && age<30 ? "you are senior":"retired pertion" : "minor";

// console.log(result);

// function without using return statement 
// without return fun nahi use hota hai
function add (a,b) {
    console.log(a+b);
}
let totaleSum = add(23,45);
console.log(totaleSum);

  
   
//  function using return statement 
function sub (a,b) {
    return b-a;
}
let totalSub = sub(23,45);
console.log(totalSub);

//   install next js 
//  npm uninstall create-next-app -g

// npx create-next-app@latest
//  y

function fun1 (a,b) {
    let sum = a + b;
    console.log(sum);
    return a-b;
};

console.log(fun1(34,10));

 let count = null
function str1(str){
    for(let i = 0; i<str.length; i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]=='o' || str[i]==='u'){
            count++;
            console.log(str[i]);
            
        }
    }
    console.log(count);
    // console.log(str.length);
    
    
    
}

str1("akhilesh");
// str1("aeiou");
// str1("aeiou");

let cou = null;
const findVovel = (st) => {
        for (const stri of st) {
             if(stri==='a' || stri==='e' || stri==='i' || stri==='o' || stri==='u'){
                cou++;
                console.log(stri);
                
             }
        }
        console.log(cou);
        
}
findVovel("yadav")


let arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach((vel)=>{
    if(vel%3===0){
        console.log(vel **2);
    }
})

let M = arr.map((vel) => {
    
        return vel*3;
});
console.log(M);
let f = arr.map((vel) => {
        if(vel%2==0){
        return vel**2;
        }
});
console.log(f);






