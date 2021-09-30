/*const names = ["daniel", "james", "irina", "mozafar", "ashleigh"];

function formatName(name) {
    return name.split("")[0].toUpperCase() + name.slice(1); //¿QUE HACE EL SLICE?
  }
  function log(name, index) {
    console.log(index + ": " + name);
  }
  const namesFormatted = names.map(formatName);
  namesFormatted.forEach(log);*/

  //EJERCICIO

  //Create a function which accepts an array of "messy" strings. Example:

//This function should:
//Remove all non-string entries
//Change the strings to upper case, and add an exclamation mark to the end
//If you're using the above example, 
//you should expect to return an array with 2x ELAMIN!, 1x SANYIA!, 2x ISMAEL! and 1x JAMES!.

const messyArr = [ 100, "iSMael", 55, 45, "sANyiA", 66, "JaMEs", "eLAmIn", 23, "IsMael", 67, 19, "ElaMIN", ];

const arrenged = messyArr.filter(item => typeof item === 'string')
                         .map(item => item.toUpperCase() + "!")
                         

console.log(arrenged) 