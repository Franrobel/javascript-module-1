/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;

function sumTillNum(num){
	let result = 0;
	  //console.log(result);
	for (i = 0; i <= num; i++){ //0+1+2+3
		//console.log(i, result)
		result = i + result;
		//console.log(result)
	}

	return result//your code here
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));

//result   	(   i--result) result  //si n fuese 3
 // 0		  	0	 0		0
//	  			1    0      1 
//				2    1      3
//				3    3      6