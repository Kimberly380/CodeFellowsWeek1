
//get to know user and send personalized message
var userName = prompt("Hi. Welcome to my site! What's your name?");
console.log("User name is " + userName);

//introduce game and ask for user participation.  If user refuses, no further questions will be asked.
var readyToPlay = prompt("Hi " + userName + "!  Are you ready to play a Guessing Game about me (Y/N)?")
var readyToPlayElement = document.getElementById("readyToPlay");

if (readyToPlay.toUpperCase() === "N" || readyToPlay.toUpperCase() ==="NO") {
  console.log(userName + " refuses to play.");
  alert("Oh well, I guess you'll never know who I am.  Have a nice day!");

    } else {
        console.log(userName + " is ready to play.");


        //If user says they want to participate, then the following questions will be asked.
          var questionOne = prompt("First Question: Am I originally from Portland?");

          if (readyToPlay){
              if (questionOne.toUpperCase() === "Y" || questionOne.toUpperCase() ==="YES") {
                console.log(userName + "incorrectly said yes.");
                alert("No, sorry that's incorrect. I'm not from Portland but have lived here for 6 years. Let's move on.");
              } else {
                console.log(userName  + "correctly said no.");
                alert("Yes, that's correct! I'm actually from Atlanta. Next Question...");
              }

          var questionTwo = prompt("Second Question: Do I love chocolate?");

          if (questionTwo.toUpperCase() === "Y" || questionTwo.toUpperCase() === "YES") {
              console.log('userName ' + "incorrectly said yes.");
              alert("Sorry, wrong guess. I don't like chocolate much at all! Let's move on to the next question.");
              } else {
              console.log('userName ' + "correctly said no.");
              alert("That's correct! Not a fan of chocolate. Let's move on to the next question.");
            }

            var questionThree = prompt("Third Question: Can I run a 6 minute mile?");

          if (questionThree.toUpperCase() === "Y" || questionThree.toUpperCase() === "YES") {
              console.log('userName ' + "incorrectly said yes.");
              alert("Of course I can't! Dont be silly! Just two more question to go...");
              } else {
              console.log('userName ' + "correctly said no.");
              alert("Of course I can't...you know me well.");
            }

          var myNum = 2;
          var keepRunning = true;

          while (keepRunning) {
              var guessNumber = parseInt(prompt("Guess my favorite number between 1 and 10"));
              if(guessNumber === myNum){
                  alert("Yay! You got it!");
                  keepRunning = false;
                  break;
                }
                  else if (guessNumber > myNum) {
                  alert("Sorry, too high! Guess again.");
                } else if (guessNumber < myNum) {
                  alert("Sorry, too low! Guess again.");
                } else {
                  alert("Oops, that's not a number between 1 and 10");
                  }
            }


          } //close of readyToPlay if statement
        }
