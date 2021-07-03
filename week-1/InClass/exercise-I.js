
//Using the answer from step 1, write a function that takes someone's 
//name and age as input and returns a string that states the person's 
//name and year they were born in a sentence//


function getYear(currentYear){
  return currentYear - 22;
 }
 
 function nameAndYear(name,currentYear){
   const yearBorn = getYear(currentYear);
   const sheIsBorn = 'My name is ' + 'Laura' + ' and I was born in ' + yearBorn;
   return sheIsBorn;
 }
 
 console.log(nameAndYear(name,2021));

