//This function does not need to be modified. Can you pass in a callback function which will mutate namesArray 
//such that it: Upper cases all letters in the array


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
 
  
  const arraysUpperNa = namesArray => namesArray.map((names) => names.toUpperCase())
  console.log(magician(arraysUpperNa))



   
/*function tidy(mentors) {                     
    return mentors.trim().toLowerCase();
  }
  
  const mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];   //const numbers = [1, 2, 3];
  const tidyMentors = mentors.map(tidy)         //la funcion ahora esta dentro de el argumento de map,              
                           // eso es CALL BACK FUNCTION
                                                           //const numbersDoubled = numbers.map(double);

  console.log(mentors)
  console.log(tidyMentors)

  // FIN
 /*function double(numbers){
     return numbers * 2;
 }
  const numbers = [1, 2, 3];
const numbersDoubled = numbers.map(double);
console.log(numbersDoubled);*/