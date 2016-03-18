
//get to know user and send personalized message
var userName = prompt("Hi. Welcome to my site! What's your name?");


//introduce game and ask for user participation.  If user refuses, no further questions will be asked.
//note: this needs to be part of the below array/loop. will fix tomorrow.
var readyToPlay = prompt("Hi " + userName + "!  Are you ready to play a guessing game about me (Y/N)?")

if (readyToPlay.toUpperCase() === "N" || readyToPlay.toUpperCase() ==="NO") {

  alert("Oh well, I guess you'll never know who I am.  Have a nice day!");

    } else {



//Here I define the generic format for each question and its properties.
function Question (question, correctAnswer, incorrectAnswer, correctAnswerResponse, incorrectAnswerResponse, undefinedResponse) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswer = incorrectAnswer;
    this.correctAnswerResponse = correctAnswerResponse;
    this.incorrectAnswerResponse = incorrectAnswerResponse;

}

//put into variable a response that will always be the same.
var undefinedResponse = "Oops! Let's try that again.  Please enter either Y/N.";

//set up question details in variables

  var question1 =   new Question("First Question: Am I originally from Portland? (Y/N)","N","Y","Yes, that's correct! I'm actually from Atlanta. Next Question...","No, sorry that's incorrect. \
  I'm not from Portland but have lived here for 6 years. Let's move on.");

  var question2 =  new Question("Do I love chocolate?","N","Y","That's correct! Not a fan of chocolate. Let's move on to the next question.","Sorry, wrong guess. I don't like chocolate \
  much at all! Let's move on to the next question.");

  var question3 = new Question("Third Question: Can I run a 6 minute mile?","N", "Y", "Of course I can't...you know me well!","Of course I can't! Dont be silly!");

//estabish object with the following properties: [question asked, correct answer, correct answer response, incorrect answer response, wrong format/undefined response]
var allQuestions = [question1, question2, question3];
var correctAnswerCounter = 0
var goodResponse = true;
function askQuestion (num) {
    prompt(allQuestions[num].question);
    }


      for(var i = 0; i < allQuestions.length; i++){
          goodResponse = true;
        while (goodResponse){
          askQuestion = prompt(allQuestions[i].question);
          if (askQuestion.toUpperCase() === allQuestions[i].correctAnswer ) {
                alert(allQuestions[i].correctAnswerResponse);
                correctAnswerCounter += 1;
                goodResponse=false;
              } else if (askQuestion.toUpperCase() === allQuestions[i].incorrectAnswer){
                alert(allQuestions[i].incorrectAnswerResponse);
                goodResponse=false;
              } else {
                    alert(undefinedResponse);
                      }
                  }
                }

//HAVEN'T HAD TIME TO INPUT THE REMAINING QUESTION INTO THE ABOVE ARRAY/LOOP.  TOMORROW!!


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
