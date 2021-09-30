/*const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  
  for (let i = 0; i < daysOfWeek.length; i++) {
    const dayMessage = "day is: " + daysOfWeek[i];
    const indexMessage = "index is: " + i;
    console.log(indexMessage, dayMessage);
  }
  
  Write a function which takes your students array as an input. In the function, 
  use a for loop to iterate over the array and print the name of each student to the console.*/

  const students = ["Ahmed", "Maria", "Amy", "Nahidul", "Jack"];


  function printNames(array){
  for(i = 0; i < array.length; i ++){
    console.log(array[i])
  }
  
  }
  
  console.log(printNames(students))