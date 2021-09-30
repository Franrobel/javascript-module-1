//Create a function that takes a birthYear, and returns the age of someone
//You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. 
//Take this array and create another array containing their ages.
//console.log the birth years array


const yearsWereBorn = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

<<<<<<< HEAD
const agesWereBorn = yearsWereBorn.forEach(birthYear => 2021 -birthYear))
=======
const agesWereBorn = yearsWereBorn.map((birthYear) => 2021 -birthYear);
>>>>>>> dafac4ce44fe6f39b5cc92b5403dabd4e37a6687
console.log(yearsWereBorn);
console.log(agesWereBorn)


/*const getAge = (birthYear) => 2021 - birthYear;
const yearsWereBorn = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const peopleAges = yearsWereBorn.map(getAge);
console.log(peopleAges)*/