/*const students = [
    { name: "Pravin", marks: 80 },
    { name: "Ram", marks: 60 },
    { name: "Shyam", marks: 90 },
    { name: "Amit", marks: 40 }
];

students.forEach(student =>{
    console.log(student.name)
})

const studentname = students.map(student => student.name);
console.log(studentname);

const studentmark = students.filter(student => student.marks>70);
console.log(studentmark);

const totalmarks = students.reduce(total,student => total+student.marks,0);
console.log(totalmarks);*/

const frontend = ["html","css","javascript"];
const backend = ["node.js","express.js","mangodb"];

const fullstack = [...frontend,...backend];
 console.log (fullstack);

 const addnum = (...number)=>{
    return number.reduce((total,number)=>total+number,0);

 };
 console.log (addnum(101.30,49,30));
