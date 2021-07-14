var peoppleInTable = ["Samantha", "John", "Leo", "Santiago"];

console.log(peoppleInTable)
console.log(peoppleInTable.length)
peoppleInTable.shift(0) = "Guido";
console.log(peoppleInTable);
peoppleInTable[4] = "Aroa";
console.log(peoppleInTable);
peoppleInTable.slice(1, 3);
console.log(peoppleInTable.slice(1, 3));
peoppleInTable.includes('Aroa')
console.log(peoppleInTable.includes('Cintia'))
peoppleInTable.join()
console.log(peoppleInTable.join(' ~ '))
var stringK = "The " + "kitchen " + "is" + " untidy";
console.log(stringK)
console.log(stringK.split())
var stringArr = stringK.split();
stringArr.join(" ~ ")
console.log(stringArr.join(" ~ "))