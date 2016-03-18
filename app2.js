
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
                questionPortland = prompt("First Question: Am I originally from Portland?");
                console.log("user answer to portland: " + questionPortland+ " correct answer = N")
                      if (questionPortland.toUpperCase() === "Y" || questionPortland.toUpperCase() === "YES") {
                          alert("No, sorry that's incorrect. I'm not from Portland but have lived here for 6 years. Let's move on.");
                          userAnswer = false;
                          break;
                        } else if (questionPortland.toUpperCase() ==="N" || questionPortland.toUpperCase() ==="NO"){
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
                questionChocolate = prompt("Do I love chocolate?");
                console.log("user answer to chocolate: " + questionChocolate + " Correct Answer = N");
                      if (questionChocolate.toUpperCase() === "Y" || questionChocolate.toUpperCase() === "YES") {
                          alert("Sorry, wrong guess. I don't like chocolate much at all! Let's move on to the next question.");
                          userAnswer = false;
                          break;
                        } else if (questionChocolate.toUpperCase() ==="N" || questionChocolate.toUpperCase() ==="NO"){
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
                questionMile = prompt("Third Question: Can I run a 6 minute mile?");
                console.log("user answer to 6 minute mile: " + questionMile + " Correct answer = N")
                      if (questionMile.toUpperCase() === "Y" || questionMile.toUpperCase() ==="YES") {
                          alert("Of course I can't! Dont be silly!");
                          userAnswer = false;
                          break;
                        } else if (questionMile.toUpperCase() ==="N" || questionMile.toUpperCase() ==="NO"){
                          alert("Of course I can't...you know me well!");
                          correctAnswerCounter += 1;
                          userAnswer = false;
                          break;
                        } else {
                          alert("oops! Let's try that again.  Please enter either yes or no.");
                        }
                }

          var myNum = 3;
          var keepRunning = true;
          var guessNumber
          var guessCounter = 0

          while (keepRunning && guessCounter < 4 ) {
              guessNumber = parseInt(prompt("Guess my favorite number between 1 and 100"));
              console.log("user answer to guess number: " + guessNumber + ".  pass # :"+guessCounter + " correct answer ="+myNum)
              if (isNaN(guessNumber)){
                guessCounter +=1;
                alert("Don't be cheeky! This is a NUMBER guessing game. Input a NUMBER, 1 to 100.");
              } else if (guessNumber === myNum){
                  alert("Yay! You got it!");
                  correctAnswerCounter +=1;
                  keepRunning = false;
                  break;
                }
                  else if (guessNumber > myNum) {
                  guessCounter += 1;
                  alert("Sorry, too high! You have " + (4 - guessCounter) + " guesses left...");
                } else if (guessNumber < myNum) {
                  guessCounter +=1;
                  alert("Sorry, too low! You have " + (4 - guessCounter) + " guesses left...");
                } else {
                  alert("Oops, that's not a number between 1 and 10");
                  }
            if (guessCounter === 4){
                alert("I'm afraid you reached your fourth guess. We have to move on.");
              }
            }


            var podcastArray =["ted radio hour", "serial", "radiolab", "fresh air", "this american life", "freakonomics radio"];

            alert("Ok, final question...");
            var userResponse = prompt("Name a podcast I listen to.");
            console.log("Correct podecast list= " +podcastArray);

              for(var i = 0; i < 2 ; i++) {
                  userResponse;
                  console.log("user response to podcast guess" + userResponse +". Pass #: " + i);
                  if(podcastArray.indexOf(userResponse.toLowerCase())>=0) {
                     userResponse=prompt("Yup! That's one of them.\nSee if you can guess one more.");
                     correctAnswerCounter += 1;
                  } else {
                    userResponse=prompt("Nope, try again.");
                     }
                  }
             alert("Ok, that's enough of that! Let's see how you did.");


            console.log("number of correct answers "+correctAnswerCounter);

            var finalCounter = function() {
                 switch(true) {
                    case (correctAnswerCounter < 3):
                        return "I guess we should grab a coffee and get to know each other better.";
                        break;
                    case (correctAnswerCounter >3):
                        return "It's like you know me better than I know myself!";
                        break;
                    default:
                        return "Not bad. It was great to meet you! Enjoy your day!";
                  }
                }

          var finalMessage = userName + ", you got " + correctAnswerCounter + " correct answers out of 5. " +finalCounter() ;
            //the "out of 5" can be a variable counting array.length, once questions are set up in for loop.

            alert(finalMessage);


        } //close of readyToPlay if statement
