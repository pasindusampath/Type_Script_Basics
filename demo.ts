//import Statement of Student class that exported from oop-class.ts
import {Student} from "./oop-class";

let student:Student = new Student()

student.name = "John";
student.age = 20;
student.address = "USA";
student.contact = "123456789";

console.log("Name : "+student.name);
console.log("Age : "+student.age);
console.log("Address : "+student.address);
console.log("Contact : "+student.contact);
