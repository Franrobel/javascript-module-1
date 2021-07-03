var numberOfStudents = 18;
var numberOfMentors = 3;
var quantity = numberOfMentors + numberOfStudents;
var percentageStudents = (numberOfStudents*100)/quantity; 
var percentageMentors = (numberOfMentors*100)/quantity;
const perStudents = Math.round(percentageStudents);
const perMentors = Math.round(percentageMentors);
console.log(perStudents);
console.log(perMentors);


