const employee = {
    name: "pravin",
    department: "It",
    salary: 350000
};

const {name,department,salary} = employee;
console.log(name,department,salary);

function showEmployee({name,department,salary}){
console.log(`Employee name is ${name} and department is ${department}and salary is ${salary}`);


}
showEmployee(employee);

const bonus = ()=>{
    console.log (salary+5000);
}
bonus();
console.log(`final bonus salary is ${salary+5000}`);