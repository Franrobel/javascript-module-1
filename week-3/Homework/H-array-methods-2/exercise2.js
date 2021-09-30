/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  var splitWords = str.split(''); //split junta de string a array el parentesis con las comillas separa cada letra del array
     splitWords[0] = splitWords[0].toUpperCase(); // esto me devuelve la primera letra en mayuscula (solo la primera)
      return splitWords.join(''); // al hacer join vuelve a juntar todo el string creado con la primera letra en mayuscula
    

}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
