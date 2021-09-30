/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
<<<<<<< HEAD
//EN ESTE CASO JUSTO EL PRIMERO MAYOR DE 7 ES ALEXANDRA, COMO HARIA PARA BUSCAR POR LA PRIMERA LETRA 
var longNameThatStartsWithA = names.find(name => name.startsWith('A') && name.length > 7 ) ;
=======

const isLongName = names.find((names) => names.length > 7)
>>>>>>> dafac4ce44fe6f39b5cc92b5403dabd4e37a6687


console.log(isLongName);

/* EXPECTED OUTPUT */
// "Alexandra"
