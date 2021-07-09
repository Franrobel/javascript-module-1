function mentorUc(mentor) {
    var nameUc = mentor.toUpperCase();   
    return nameUc
  //devuelve valor, no variable reutilizable
}
function greetingMentor(mentor, greeting) {
    var greeting = greeting.toUpperCase() + " " + mentorUc(mentor);   
    return greeting;
}
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(greetingMentor(mentor1, "hello"));
console.log(greetingMentor(mentor2, "hello"));
console.log(greetingMentor(mentor3, "hello"));
console.log(greetingMentor(mentor4, "hello"));
console.log(greetingMentor(mentor5, "hello"));

/*- In `exercise2.js` you have been provided with the names of some mentors. Write a program that logs a shouty
 greeting to each one.
- Your program should include a function that spells their name in uppercase, and a function that creates a shouty
 greeting.
- Log each greeting to the console.

## Expected result

```
HELLO DANIEL
HELLO IRINA
HELLO MIMI
HELLO ROB
HELLO YOHANNES
```*/
