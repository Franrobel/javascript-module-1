

function exponential(num) {
  return num * num;
}
function isEven(num) {
  return num % 2 === 0;
}

function numAndExponential(){
    for (let num = 5; num < 20; num++){
      if (isEven(num)){
          console.log("The exponencial of " + num + " is " + (exponential(num)));
        }
    }
  }

numAndExponential();





/*  for (let i = 0; i < 100; i++) {
  console.log("The count is: " + counter);
}

Calculate the exponential of the even numbers from 5 to 20 Using a for loop and the helper functions provided.

Expected output
The exponential of 6 is 36
The exponential of 8 is 64
The exponential of 10 is 100
The exponential of 12 is 144
The exponential of 14 is 196
The exponential of 16 is 256
The exponential of 18 is 324*/ 