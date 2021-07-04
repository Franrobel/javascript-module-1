var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function mentorUc(mentor){
    var nameUc = mentor.toUpperCase();
    return nameUc;
}
console.log(mentorUc("daniel"));

function greetingMentor (mentor, greeting){
    var greeting = (greeting + " " + mentor).toUpperCase();
    return greeting;
}
console.log(greetingMentor("daniel", "hello"));
console.log(greetingMentor("irina", "hello"));
console.log(greetingMentor("mimi", "hello"));
console.log(greetingMentor("rob", "hello"));
console.log(greetingMentor("Yohannes", "hello"));

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