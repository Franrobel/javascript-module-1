/*EJEMPLO
const testScores = [90, 50, 100, 66, 25, 80, 81];
function isHighScore(score) {
    return score > 80;
  }
const highTestScores = testScores.filter(isHighScore);
console.log(highTestScores); --> LOGS ->(3) [90, 100, 81]*/

//Create a function which:
//Takes an array of birthYears
//Uses console.log to print the message These are the birth years of people who can drive: <filtered birth years>
//Returns an array of people who can drive (remember, you can drive if you are 17 years or older)


const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function yearsOfDrivers (birthYears) {
 const yearsfiltered = 2021 - birthYears >= 17;
return  console.log(`These are the birth years of people who can drive: ${yearsfiltered}`); }

 const filteredyears = birthYears.filter(yearsOfDrivers)
  

    console.log(filteredyears)