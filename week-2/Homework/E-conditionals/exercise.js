/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";
if (name == "Daniel" && danielsRole == "mentor") {// if I change the var name it will still give me the same name because the condition has the name and the second console has daniel
  console.log("Hi, I'm Daniel I'm a mentor");
} else {
  console.log("Hi, I'm Daniel, I'm a student.");
} 

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
