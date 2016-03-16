// 201
// 1-mon-lecture/code-demo js

/*var userName = prompt('What is your name?');
console.log('Meow Meow Meow ' + userName + '!!!!');

console.log('userGame before prompt: ', userGame);
var userGame = prompt('What is your game?');
console.log('userGame after prompt: ', userGame);
alert('So, ' + userName + ', I heard you like ' + userGame);

var loveHate = confirm(userName + ' do you love interweb?');
alert('Does, ' + userName + ' love interweb? ' + loveHate);



var userName = prompt("Hello new Code Fellows' student.  What's your name?");
name.textcontent = "Hello " + userName + "!"
;
console.log ("Hello " + userName + "!");

var intro = prompt("Hi, "+userName + ".  Welcome to Code Fellows.  We're conducting\
 a survey on how well new students understand Git.  Would you like to\
 participate? (Y/N)");

var surveyIntroResponse = function() {
          if(intro.toUpperCase() === "Y"){
            return prompt("Great!  Let's begin.  On a scale of 1 to 10, how\
             well do you understand Git?");
          }
            else if(intro.toUpperCase() === "N") {
              return confirm("Ok, we'll assume you don't understand Git at all!\
                Thanks anyway!");
            } else {
                  return ("Please enter either Y or N to continue.");
                }
              }

surveyIntroResponse(intro);
