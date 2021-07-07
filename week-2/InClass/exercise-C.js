let esto = "hello";

function numberChecker(num) {
  if (num > 20) { /*if the parameter is greater than 20 the result will be the following line*/
    return `${num} is greater than 20`;
  } else if (num === 20) { /* if it is equal value and type will give the following line*/
    return `${num} is equal to 20`;
  } else if (num < 20) {/* if it is less than ...*/
    return `${num} is less than 20`;
  } else {    /* whatever else happen will give me the following*/
    return `${num} isn't even a number :(`;
  }
}

console.log(numberChecker(10));
console.log(numberChecker('20')); /* as '20' is a string the result is not even a number*/
console.log(numberChecker(20));
console.log(numberChecker(32));
console.log(numberChecker("hello")); /* in line 1 there is a variable = 'hello' but it is a string so is not even a number*/