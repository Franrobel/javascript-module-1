function boolChecker(bool) {
  if (typeof bool === "boolean") /* if the parameter is a boolean*/{
    return "You've given me a bool, thanks!"; /*if it is a boolean O give me this result*/
  }

  return "No bool, not cool.";/* if it is not boolean it will give me this*/
}

console.log(boolChecker(false)); /*the parameter is a boolean (true or false) so it will give the first result*/


