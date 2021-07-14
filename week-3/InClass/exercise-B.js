/*Use the array of the people from your class
Combine it with another array filled with the names from another class
console.log the names in alphabetical order
Create a function that takes a name and an array of names and returns a string. 
If the name is not in an array, it should return <name> is not at the class with <people in the array>.
 If the name is in the array, it should return <name> is at the class with <people in the array>*/

var studentsInTable = ["Samantha", "John", "Leo", "Santiago"];
console.log(studentsInTable)
var moreStudents = ["Katia", "Patricia", "Lucia"]
console.log(moreStudents)
var allOfThem = studentsInTable.concat(moreStudents)
console.log(allOfThem.sort())

function peopleInTheArr (name, allOfThem){
    if (allOfThem.includes(name)) {
        return (name + " is at the class with " + allOfThem)
    } else {
        return (name + " is not at the class with " + allOfThem)
    }
}
console.log(peopleInTheArr("Jorge", allOfThem))

// FIN

/*const mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];
console.log(mentors)
function tidy(name) {
    return name.trim().toLowerCase();
  }
  console.log(tidy("Daniel "))*/

  //FIN

 