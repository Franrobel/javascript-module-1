/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"]

function pairsOrNot(pairs) {
    var result = pairs.filter((pair) => Array.isArray(pair) && pair.length ===2 )
    return result
}
 
//var pairs = pairs.filter(pair => array.isArray(pair) && pair.length === 2);// Complete this statement
var pairsByIndex = pairsOrNot(pairsByIndexRaw)
var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];
console.log('pairsByindex', pairsByIndex);
var pairs = pairsByIndex.map((indexes) => {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);

/*var testScores = [90, 50, 100, 66, 25, 80, 81];
function isHighScore(score) {
  return score >= 80;
}
var greaterEighty = testScores.filter(isHighScore);// filter me da un nuevo array con los valores que me da la funcion isHighScores
console.log(greaterEighty)*/