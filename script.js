// global variables needed by all functions
var userScore = 0;
var userName = null;

//master game function
function guess() {
  var gameAnswer = document.getElementById("answer");
  var myInnerHTML = "";

  if (userName == null) {
    userName = getUserName();
  }

  myInnerHTML = greetUser(userName);
  myInnerHTML += "Here are your answers: <ol>"

  if (userName != "") {
    myInnerHTML += myGame();
  }

  myInnerHTML += "</ol><p>Congratulations, " +userName+ "!  You have " +userScore+ " correct answers.</p>";

  gameAnswer.innerHTML = myInnerHTML;
}

// ask for the user's name
function getUserName () {
  while ((userName == null) || (userName.trim() == "")) {
    userName = prompt("What is your name?","");
    console.log(userName);
  }
  if (userName != null) {
    return userName;
  } else {
    return "";
  }
}

// greet the user
function greetUser(name) {
  var greeting = "<p>Thank you for visiting, "
  if (name != "") {
    greeting += name + "."
  }
  greeting += "  I hope you enjoy your visit.</p>";
  return greeting;
}

function gameQuestion(gameQuestion, gameAnswer, answerType) {
  this.gameQuestion = gameQuestion;
  this.gameAnswer = gameAnswer;
  this.answerType = answerType;
  this.checkAnswer = function() {
    var answerString = "";
    var userAnswer = prompt(this.gameQuestion);
    switch (this.answerType) {
      case "single":
        answerString += checkSingle(userAnswer,this.gameAnswer);
        break;

      case "number":
        answerString += checkNumber(userAnswer,this.gameAnswer);
        break;

      case "multi":
        answerString += checkMulti(userAnswer,this.gameAnswer);
        break;

      default:
        answerString += "I did not understand your answer " +userName+ " .";
    }

    function checkSingle(theirAnswer,rightAnswer) {
      var myString = "";
      if (theirAnswer.toLowerCase() == rightAnswer.toLowerCase()) {
        myString = "<li>You said: " +theirAnswer+ ".  That is correct, " +userName+"!</li>";
        userScore++;
      } else {
        myString = "<li>You said: " +theirAnswer+ ".  That is not correct, " +userName+".  The correct answer is " + rightAnswer + ".</li>";
      }
      return myString;
    }

    function checkNumber(theirAnswer, rightAnswer) {
      var myString = "";
      do {
        if (theirAnswer < rightAnswer) {
          theirAnswer = prompt("That is too low!  Guess again.");
        } else if (theirAnswer > rightAnswer) {
          theirAnswer = prompt("That is too high! Guess again.");
        }
      } while (theirAnswer != rightAnswer);
      if (theirAnswer == rightAnswer) {
         myString = "<li>You said: " +theirAnswer+ ".  That is correct, " +userName+"!</li>";
         userScore++;
      }
      return myString;
    }

    function checkMulti(theirAnswer, rightAnswer) {
      var myString = "";
      var match = false;
      for (var i = 0; i < rightAnswer.length; i++) {
        if (theirAnswer.toLowerCase() == rightAnswer[i].toLowerCase()) {
          match = true;
          break;
        }
      }
      if(match) {
        myString = "<li>You said: " +theirAnswer+ " . That is correct " +userName+ ".</li>"
        userScore++;
      } else {
        myString = "<li>You said: " +theirAnswer+ ". That is not correct " +userName+ ".</li>"
      }
      return myString;
    }

    return answerString;
  }
}

var school = new gameQuestion("Where did I graduate from high school?", "Kenya", "single");
var husband = new gameQuestion("Where did I meet my husband?", "Portland", "single");
var comic = new gameQuestion("Did I work at a comic book store?", ["Yes", "Y"], "multi");
var dogs = new gameQuestion("How many dogs do I have?", 2, "number");
var guessNum = new gameQuestion("What is my number? Guess a number 1-15.", 9, "number");
var siblings = new gameQuestion("Name one of my siblings.", ["James", "Brent", "Maria"], "multi");

function myGame() {
  var answerString = "";
  var myGameArr = [school, husband, comic, dogs, guessNum, siblings];
  for (var i = 0; i < myGameArr.length; i++) {
    answerString += myGameArr[i].checkAnswer();
  }
  return answerString;
}
