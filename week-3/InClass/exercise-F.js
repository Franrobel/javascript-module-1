//You can drive in the UK at the age of 17.
//Write another function that takes a birth year and returns a string Born in {year} can drive 
//or Born in {year} can drive in {x} years

//Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], 
//to get an array of strings saying if these people can drive 

//console.log the answers

const yearsWereBorn = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function whoCanDrive(yearsWereBorn){
    yearsWereBorn.forEach((birthYear) => {
        const year = 17 - (2021 -birthYear);

    if (2021 - birthYear >= 17)
        {console.log(`Born in ${birthYear} can drive`)}
        else
        {console.log(`Born in ${birthYear} can drive in ${year} years`)}
})
}

console.log(whoCanDrive(yearsWereBorn))
/*const wCanDrive = yearsWereBorn.forEach((birthYear) => `Born in ${birthYear} can drive` || `Born in ${birthYear} can drive in ${year} years`); 

function ageOfSome(birthYear){

    return 2021 - birthYear;
}
const yearsWereBorn = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

const agesWereBorn = yearsWereBorn.forEach(function (birthYear) {console.log(2021 -birthYear);}); 

console.log(yearsWereBorn);
console.log(agesWereBorn)*/