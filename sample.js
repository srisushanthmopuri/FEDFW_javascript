let student={
    name: "Sushanth",
    id:2500031844,
    year:2,
    course:"FEDF",
    address:{
        door:101,
        street:1,
        city:"kakinada"
    }
}
console.log("Student Id:",student.id)
console.log("Student Name:",student.name)
console.log("Student year:",student.year)
console.log("Student Course:",student.course)
console.log("Address:",student.address)
console.log("City:",student.address.city)

console.log(student["name"])

//creating object using constructor function
function Student(id,name,grade){
    this.id=id;
    this.name=name;
    this.grade=grade;
}
let stu1 = new Student(2500031844,"Sushanth","A+");
let stu2 = new Student(2500030643,"sai","O");

console.log("student 1 id: "+stu1.id);
console.log("student 1 name: "+stu1.name);
console.log("student 1 grade: "+stu1.grade);
console.log("student 2 id: "+stu2.id);
console.log("student 2 name: "+stu2.name);
console.log("student 2 grade: "+stu2.grade);

//define a class and create an object using new keyword
class employee{
    constructor(id,name,designation,salary){
        this.id=id;
        this.name=name;
        this.designation=designation;
        this.salary=salary;
    }
    display(){
        console.log("employee id: "+this.id);
        console.log("employee name: "+this.name);
        console.log("employee designation: "+this.designation);
        console.log("employee salary: "+this.salary);
    }
}
let emp1 = new employee(642,"susahnth","developer",50000);
let emp2 = new employee(644,"teja","tester",40000);
emp1.display();
emp2.display();

//adding the properies to the object dynamically

student.grade = "A+";
console.log("student information");
console.log(student);