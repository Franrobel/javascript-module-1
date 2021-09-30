/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi"];

<<<<<<< HEAD
var groupIsOnlyStudents = group.every(persons => students.includes(persons))
  
if (!groupIsOnlyStudents) {
=======
var groupIsOnlyStudents = group.includes(students); // complete this statement

if (groupIsOnlyStudents) {
>>>>>>> dafac4ce44fe6f39b5cc92b5403dabd4e37a6687
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
