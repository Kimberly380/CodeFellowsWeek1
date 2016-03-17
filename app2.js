
//get to know user and send personalized message
var userName = prompt("Hi. Welcome to my site! What's your name?");
console.log("User name is " + userName);

//introduce game and ask for user participation.  If user refuses, no further questions will be asked.
//note: this needs to be updated to catch non-yes/no answers.  Leave for now...known bug!
var readyToPlay = prompt("Hi " + userName + "!  Are you ready to play a guessing game about me (Y/N)?")

if (readyToPlay.toUpperCase() === "N" || readyToPlay.toUpperCase() ==="NO") {
  console.log(userName + " refuses to play.");
  alert("Oh well, I guess you'll never know who I am.  Have a nice day!");

    } else {
        console.log(userName + " is ready to play.");

        correctAnswerCounter = 0 //this is to count correct answers

        userAnswer = true;  //first question.  exception testing for non yes/no answers.

        while (userAnswer) {
                question = prompt("First Question: Am I originally from Portland?");
                      if (question.toUpperCase() === "Y" || question.toUpperCase() === "YES") {
                          console.log(userName + " incorrectly said yes.");
                          alert("No, sorry that's incorrect. I'm not from Portland but have lived here for 6 years. Let's move on.");
                          userAnswer = false;
                          break;
                        } else if (question.toUpperCase() ==="N" || question.toUpperCase() ==="NO"){
                          console.log(userName  + "correctly said no.");
                          alert("Yes, that's correct! I'm actually from Atlanta. Next Question...");
                          correctAnswerCounter += 1;
                          userAnswer = false;
                          break;
                        } else {
                          alert("oops! Let's try that again.  Please enter either yes or no.");
                        }
                }

          userAnswer = true;  //second question.  exception testing for non yes/no answers.

          while (userAnswer) {
                question = prompt("Do I love chocolate?");
                      if (question.toUpperCase() === "Y" || question.toUpperCase() === "YES") {
                          console.log('userName ' + "incorrectly said yes.");
                          alert("Sorry, wrong guess. I don't like chocolate much at all! Let's move on to the next question.");
                          userAnswer = false;
                          break;
                        } else if (question.toUpperCase() ==="N" || question.toUpperCase() ==="NO"){
                         console.log('userName ' + "correctly said no.");
                          alert("That's correct! Not a fan of chocolate. Let's move on to the next question.");
                          correctAnswerCounter += 1;
                          userAnswer = false;
                          break;
                        } else {
                          alert("oops! Let's try that again.  Please enter either yes or no.");
                        }
                }

          userAnswer = true; //third question.  exception testing for non yes/no answers.

          while (userAnswer) {
                question = prompt("Third Question: Can I run a 6 minute mile?");
                      if (question.toUpperCase() === "Y" || question.toUpperCase() ==="YES") {
                          console.log('userName ' + "incorrectly said yes.");
                          alert("Of course I can't! Dont be silly!");
                          userAnswer = false;
                          break;
                        } else if (question.toUpperCase() ==="N" || question.toUpperCase() ==="NO"){
                          console.log('userName ' + "correctly said no.");
                          alert("Of course I can't...you know me well!");
                          correctAnswerCounter += 1;
                          userAnswer = false;
                          break;
                        } else {
                          alert("oops! Let's try that again.  Please enter either yes or no.");
                        }
                }

            userAnswer = true; //fourth question.  exception testing for non yes/no answers.

            while (userAnswer) {
                  question = prompt("Here's the fourth question (and MOST important\) question: Are you having fun?");
                        if (question.toUpperCase() === "Y" || question.toUpperCase() ==="YES") {
                            console.log('userName ' + "correctly said yes.");
                            alert("I'm so glad to hear it! Just two more question to go...");
                            correctAnswerCounter += 1;
                            userAnswer = false;
                            break;
                          } else if (question.toUpperCase() ==="N" || question.toUpperCase() ==="NO"){
                            console.log('userName ' + "incorrectly said no.");
                            alert("Aww, that's too bad. You're almost done. Just two questions to go...");
                            userAnswer = false;
                            break;
                          } else {
                            alert("oops! Let's try that again.  Please enter either yes or no.");
                          }
                  }


          var myNum = 2;    //fourth question.  keep guessing until they get it right.
          var keepRunning = true;
          var guessCounter = 0  //limit them to 3 guesses (known bug.  need to fix three-guess functionality.)

          while (keepRunning && guessCounter < 3) {
              var guessNumber = parseInt(prompt("Guess my favorite number between 1 and 10"));
              if(guessNumber === myNum){
                  alert("Yay! You got it!");
                  correctAnswerCounter +=1;
                  keepRunning = false;
                  break;
                }
                  else if (guessNumber > myNum) {
                  alert("Sorry, too high! Guess again.");
                  guessCounter += 1;
                } else if (guessNumber < myNum) {
                  alert("Sorry, too low! Guess again.");
                  guessCounter +=1;
                } else {
                  alert("Oops, that's not a number between 1 and 10");
                  }
              console.log("number of guess " + guessCounter);
              if (guessCounter === 3){
                alert("Sorry. That was three guesses. We have to move on.");
              }
            }


            alert("Ok, final question...")
            function countryFunction() {
              var countryFormat = prompt("What European country did I live in before I moved to Oregon?");
              return countryFormat.toLowerCase();
            }

            var country = countryFunction();

            switch(country) {
              case "france":
                alert("Nope, a little too far north. Sorry.");
                break;
              case "spain":
                  alert("Wow! You got it! Viva Espana!");
                  correctAnswerCounter += 1;
                  break;
                case "germany":
                  alert("Nope, Germany is way too cold!");
                  break;
                default:
                  alert("Nope, it was Spain.  Viva Espana!");
                  break;
            }

            console.log(correctAnswerCounter);


            var finalCounter = function() {
                 switch(true) {
                    case (correctAnswerCounter < 3):
                        return "I guess we should grab a coffee and get to know each other better.";
                        break;
                    case (correctAnswerCounter >3):
                        return "You know me better than I know myself!";
                        break;
                    default:
                        return "Not bad. It was great to meet you! Enjoy your day!";
                  }
                }

          var finalMessage = "You got " + correctAnswerCounter + " correct out of 6. " +finalCounter() ;
            //the "out of 5" can be a variable counting array.length, once questions are set up in for loop.

            alert(finalMessage);


        } //close of readyToPlay if statement
