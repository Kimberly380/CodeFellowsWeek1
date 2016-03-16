
//get to know user and send personalized message
var userName = prompt("Hi. Welcome to my site! What's your name?");
console.log("User name is " + userName);
//document.getElementById("userName").innerText="Hi "+userName +"! Welcome to my site!";


//introduce game and begin to display info on site if users initializes
var readyToPlay = prompt("Hi " + userName + "!  Are you ready to play a Guessing Game (Y/N)?")
var readyToPlayElement = document.getElementById("readyToPlay");

if (readyToPlay.toUpperCase() === "Y" || readyToPlay.toUpperCase() ==="YES") {
  console.log(userName + " is ready to play.");
  //readyToPlayElement.textContent="Great! Let's Play!";
  //document.getElementById("moreAboutMe").textContent="Here's some stuff about me..."
} else {
  console.log(userName + " refuses to play.");
  alert("Oh well, I guess you'll never know who I am.  Have a nice day!");
  //readyToPlayElement.textContent="Oh well, I guess you'll never know who I am.  Have a nice day!";
}



//ask first question and print answer results.
var questionOne = prompt("First Question: Am I originally from Portland?");
//var questionOneElement = document.getElementById("questionOne")
if (readyToPlay){
    if (questionOne.toUpperCase() === "Y" || questionOne.toUpperCase() ==="YES") {
      console.log('userName ' + "incorrectly said yes.");
      alert("No, sorry that's incorrect. Let's move on.");
      document.getElementById("questionOne").textContent="I am originally from Atlanta, but have lived in New York, Madrid and 6 years in Portland."
    } else {
      console.log('userName ' + "correctly said no.");
      alert("Yes, that's correct! I am not from Portland.");
    }

    var questionTwo = prompt("Second Question: Do I love chocolate?");
    //var questionOneElement = document.getElementById("questionOne")

    if (questionTwo.toUpperCase() === "Y" || questionTwo.toUpperCase() === "YES") {
      console.log('userName ' + "incorrectly said yes.");
      alert("Sorry, that's incorrect. Ok, one more question.");
      document.getElementById("questionTwo").textContent="Crazy as it sounds, I actually don't like chocoloate. Must be a family thing."
    } else {
      console.log('userName ' + "correctly said no.");
      alert("That's correct!");
    }

    var questionThree = prompt("Third Question: Can I run a 6 minute mile?");

    if (questionThree.toUpperCase() === "Y" || questionThree.toUpperCase() === "YES") {
      console.log('userName ' + "incorrectly said yes.");
      alert("Sorry, that's incorrect. Let's move on to the last question.");
      document.getElementById("questionThree").textContent="Crazy as it sounds, I actually don't like chocoloate. Must be a family thing."
    } else {
      console.log('userName ' + "correctly said no.");
      alert("Oh heck no! Not even if being chased by wild monkeys! Way to Go, you got it right!");
    }






var finalAboutMe = "Now the truth about me...";

console.log(finalMadlib);
