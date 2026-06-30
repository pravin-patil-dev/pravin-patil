const student = {
    name: "Pravin",
    course: "Node.js",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(student.name);

student.skills.forEach(skill => {
    console.log(skill);
});