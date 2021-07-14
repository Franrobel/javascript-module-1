//Create a function that takes a birthYear, and returns the age of someone
//You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. 
//Take this array and create another array containing their ages.
//console.log the birth years array

function ageOfSome(birthYear){
    return 2021 - birthYear;
}

const yearsWereBorn = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const agesWereBorn = yearsWereBorn.forEach(function (birthYear) {console.log(2021 -birthYear);}); 

console.log(yearsWereBorn);
console.log(agesWereBorn)
