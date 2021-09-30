//const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

//function isLongName(name) {return name.length > 6;}

//const longName = names.find(isLongName);

//console.log(longName); --> LOG -> Mozafar(the first item that satisfies a predicate function)
  
//        EJERCICIO
/*Create a function which:
Takes an array of names
Looks to see if your name is in the array
If it is, return Found me!; if not, return Haven't found me :(*/

  function nameIsInArr (name){  
    const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
    if (names.includes(name)){
    return "Found me!";}
    else {
    return "Haven't found me :(";}
}

console.log(nameIsInArr("James"))