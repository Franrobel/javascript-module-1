<<<<<<< HEAD
//This function does not need to be modified. Can you pass in a callback function which will mutate namesArray 
//such that it: Upper cases all letters in the array
=======
//This function does not need to be modified. Can you pass in a callback function which will mutate namesArray such that it:
//Upper cases all letters in the array
>>>>>>> dafac4ce44fe6f39b5cc92b5403dabd4e37a6687
function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];
  const magicOutput = yourFunc(namesArray);
  return magicOutput;
}
 
function UpperCaseArr (array){
return array.map(name => name.toUpperCase())}
<<<<<<< HEAD

console.log(magician(UpperCaseArr))


/*
const upperNames = [namesArray[0].toUpperCase(), namesArray[1].toUpperCase(), namesArray[2].toUpperCase(), namesArray[3].toUpperCase()]

console.log(namesArray)
console.log(upperNames)
*/

  /*
  const arraysUpperNa = namesArray => namesArray.map((names) => names.toUpperCase())
  console.log(magician(arraysUpperNa))
*/


   
/*function tidy(mentors) {                     
    return mentors.trim().toLowerCase();
  }
  
  const mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];   //const numbers = [1, 2, 3];
  const tidyMentors = mentors.map(tidy)         //la funcion ahora esta dentro de el argumento de map,              
                           // eso es CALL BACK FUNCTION
                                                           //const numbersDoubled = numbers.map(double);
=======
>>>>>>> dafac4ce44fe6f39b5cc92b5403dabd4e37a6687

console.log(magician(UpperCaseArr))

