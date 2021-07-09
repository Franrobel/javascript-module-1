/*Now, using the correct indexes, get the following values from the array:
strawberry
kiwi
orange
banana
Then, replace 'apple' with 'raspberry', and replace 'fig' with 'pineapple'.*/

const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];

console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[5]);
console.log(fruits[0]);

fruits[1] = "raspberry";
fruits[4] = "pineapple";

console.log(fruits);