/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/
let n = 3;

function sumTillNum(num){
	let result = 0;
	let index = 0;
	
	while (index <= num){
		console.log(result, index);
		result = result + index;  //(0+0), (0+1) (1+2) (3+3) (6+4) (10+5) (15+6) (21+7) (28+8)   como la condicion es <10 termina en index 9
		index++;				  //(0+1), (1+1) (2+1) (3+1) (4+1) (5+1)  (6+1)   (7+1)  (8+1)
	}

	return result//your code here
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));


/*let n = 10;

function sumTillNum(num){
	let result = 0;
	let index = 0;

	console.log("Justo antes de entrar al while, result es", result, "y index es ", index)

	while (index <= num){
		console.log(`Al entrar al while        -> result es ${result} y index es ${index}`);
		result = result + index;
		index = index + 1;
		console.log(`Antes de salir del while  -> result es ${result} y index es ${index}`);
	}

	console.log(`Justo DESPUES de terminar el while, result es ${result} y index es ${index}`);

	return result//your code here
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));*/
