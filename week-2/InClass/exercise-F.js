/*In pairs, write a function that checks a username is of an acceptable format for a user type. 
The function must:
1 take two parameters: one for the username and one for the user type
2 if the username starts with a capital letter and has length between 5 and 10 characters long, 
it must return "Username valid"; 
3 otherwise, it must return "Username invalid"
if the user type is an admin or a manager, all usernames must return "Username valid"*/

function validUser(userName){//no logro usar 
    if (userName.length > 5 && userName.length < 10 && userName.charAt(0) === userName.charAt(0).toUpperCase()){
        return `Username Valid`;
    } else {
        return `Username invalid`;
    }
}

console.log(validUser("chalo38"));
/*let num = 10;

function satisfiesRequirements(num) {
  if (num > 3 || num < 10) {
    return true;
  }

  return false;
}
console.log(satisfiesRequirements(12));*/