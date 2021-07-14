/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function showDaysOfWeek (arrayOfString) {
  for (i=0; i < arrayOfString.length ; i++){
    if(arrayOfString[i].startsWith('T')){
    console.log(arrayOfString[i])
    }
  }
}
showDaysOfWeek(daysOfWeek);
/*function arrayStrings(arr) {
  const = arr;
  return daysOfWeek.startsWith('Sat');
}
console.log(arrayStrings(arr))*/