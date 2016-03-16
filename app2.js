
/*var userName = prompt('What is your name?');
console.log('Meow Meow Meow ' + userName + '!!!!');

console.log('userGame before prompt: ', userGame);
var userGame = prompt('What is your game?');
console.log('userGame after prompt: ', userGame);
alert('So, ' + userName + ', I heard you like ' + userGame);

var loveHate = confirm(userName + ' do you love interweb?');
alert('Does, ' + userName + ' love interweb? ' + loveHate


); */


var askName = prompt("Hi MadLib fanatic! What's your name?");
console.log("Hi " + askName);
document.getElementById("askName").innerText=askName;

var readyToPlay = prompt("Hi " + askName + "!  Are you ready to play Madlibs Online?")
document.getElementById("readyToPlay").innerText=readyToPlay;

var adj1 = prompt("Ok, let's go!  First, think of an adjective and type it here:");
console.log('Your adjective is ' + adj1 + '.');
document.getElementById("adj1").innerText=adj1;

var noun1 = prompt('Now think of a noun and type it here: ');
console.log('Your noun is ' + noun1 + '.');
document.getElementById("noun1").innerText=noun1;

var animalNoise = prompt("Now enter a noise an animal makes like 'oink' or 'meow'.");
console.log("Ha Ha" +animalNoise +" is silly!");
document.getElementById("animalNoise").innerText=animalNoise

var noun2 =prompt("And finally, enter one more noun, different than the first one.");
console.log(noun2 + " is perfect! Thanks!");
document.getElementById("noun2").innerText=noun2;

var readyForResults = prompt("Are you ready for your MadLib results (Y/N)?");
document.getElementById("readyForResults").innerText=readyForResults;

var finalMadlib = "Ladies and Gentlemen, here's " +askName +"'s Madlib:  \n \n " + adj1 + " McDonald had a " + noun1 + ". \n E I E I O! \n And on that " +noun1 + " he had a " + noun2 + ". \n E I E I O. \n With a " + animalNoise + " here, \n and a "+ animalNoise + " there. \n Here a " +animalNoise + ". \n There a " +animalNoise + ". \n Everywhere a " + animalNoise + " " +animalNoise +". \n " + adj1 +" McDonald had a " + noun1 + ". \n E I E I O."
document.getElementById("finalMadlib").innerText=finalMadlib;

console.log(finalMadlib);
