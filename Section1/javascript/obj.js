let student = {
    name:"akhilesh",
    batch:"bac",
    id:12,
    marks:90,
    email : "akhileshyadav90863@gmail.com",
    mob : 8173970887,
};
//  replace vale of object

student.name = "Yadavji"
console.log(student);
//  console.log(satudent.name);
//  console.log(satudent.batch);
//  console.log(satudent.id);
//  console.log(satudent.marks);
//  console.log(satudent.email);
student.name = "Kumar";
// Add new value of object
student.rollno = 12;
for (const key in student) {
    
        const element= student[key];
        console.log(element);
        
}
console.log("----------------------------------------------------------------------");

//  object ,me value ko array ke form me de sakte hai;
const smart = {
    Brand : "sumsung",
    model : "s10",
    price : 15000,
    color:["red","blue","white"],
}

console.log(smart["Brand"]);
console.log(smart.color[1]);



console.log("----------------------------------------------------------------------");

//  add multiple object in array

const phones = [
    { name: "samsung", price: 15000, color: ["red","black","white","blue" ] },
    { name: "Apple", price: 25000, color: ["red","black","white","blue" ] },
    { name: "Onepluse", price: 14000, color: ["red","black","white","blue" ] },
    { name: "Vivo", price: 18000, color: ["red","black","white","blue" ] },
    { name: "Micromex", price: 12000, color: ["red","black","white","blue" ] },
    { name: "Nothing", price: 25999, color: ["red","black","white","blue" ] },
];
const Display = [
    {Sumsung : "First1",price:1000},
]
const con = (phones.concat(Display));
console.log(phones[1].name);
console.log(phones[4].color);
console.log(con[6]);






