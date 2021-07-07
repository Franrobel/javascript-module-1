function mood(word) {
    if (word === "happy") {
        return `Good job, you're doing great!`;
    }  else if (word == "sad"){
        return `Every cloud has a silver lining`;
    } else if (word == 8){
        return `Beep beep boop`;
    } else {
        return `I'm sorry, I'm still learning about feelings!`;
    }
}
    console.log(mood("happy"));
    console.log(mood("sad"));
    console.log(mood(8));
    console.log(mood("variable"));
   
/*Create a function that gives you a message depending on your mood! It should:
take one input
return "Good job, you're doing great!" if you pass in "happy"
return "Every cloud has a silver lining" if you pass in "sad"
return "Beep beep boop" if you pass in a number
return "I'm sorry, I'm still learning about feelings!" if you pass in anything else*/
  