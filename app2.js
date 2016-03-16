
//get to know user and send personalized message
var userName = prompt("Hi. Welcome to my site! What's your name?");
console.log("User name is " + userName);
document.getElementById("userName").innerText="Hi "+userName +"! Welcome to my site!";

var readyToPlay = prompt("Hi " + userName + "!  Are you ready to play a Guessing Game (Y/N)?")
//var readyToPlayElement = document.getElementById("readyToPlay");

//introduce game and begin to display info on site if users initializes
if (readyToPlay.toUpperCase() === "Y" || "YES") {
    console.log(userName + " is ready to play.");
    document.getElementById("readyToPlay").textContent="Great! Let's Play!";
    document.getElementById("moreAboutMe").textContent="Here's some stuff about me..."
  } else {
    console.log(userName + " refuses to play.");
    readyToPlayElement.textContent="Oh well, I guess you'll never know who I am.  Have a nice day!";
  }

//ask first question and print answer results.
var questionOne = prompt("First Question: Am I originally from Portland?");
//var questionOneElement = document.getElementById("questionOne")

if (questionOne.toUpperCase() === "Y" || "YES") {
  console.log('userName ' + "incorrectly said yes.");
  alert("No, sorry that's incorrect. Let's move on.");
  document.getElementById("questionOne").textContent="I am originally from Atlanta, but have lived in New York, Madrid and 6 years in Portland."
} else {
  console.log('userName ' + "correctly said no.");
  alert("Yes, that's correct! I am not from Portland.");
}

var questionTwo = prompt("Second Question: Do I love chocolate?");
//var questionOneElement = document.getElementById("questionOne")

if (questionTwo.toUpperCase() === "Y" || "YES") {
  console.log('userName ' + "incorrectly said yes.");
  alert("Crazy as it sounds, that's incorrect. I actually don't like chocoloate. Ok, one more question.");
} else {
  console.log('userName ' + "correctly said no.");
  alert("That's correct! Can you believe it? No one in my family likes chocolate. Weird genes I guess.");
}



var finalAboutMe = "Now the truth about me...";

console.log(finalMadlib);
