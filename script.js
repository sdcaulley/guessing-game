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

//object constructor
function gameQuestion(gameQuestion, gameAnswer, answerType, gameImage) {
  this.gameQuestion = gameQuestion;
  this.gameAnswer = gameAnswer;
  this.answerType = answerType;
  this.gameImage = gameImage;
  this.checkAnswer = function() {
    var answerString = "";
    var userAnswer = prompt(this.gameQuestion);
    switch (this.answerType) {
      case "single":
        answerString += checkSingle(userAnswer,this.gameAnswer, this.gameImage);
        break;

      case "number":
        answerString += checkNumber(userAnswer,this.gameAnswer, this.gameImage);
        break;

      case "multi":
        answerString += checkMulti(userAnswer,this.gameAnswer, this.gameImage);
        break;

      default:
        answerString += "I did not understand your answer " +userName+ " .";
    }
    //check single answers
    function checkSingle(theirAnswer,rightAnswer, image) {
      var myString = "";
      if (theirAnswer.toLowerCase() == rightAnswer.toLowerCase()) {
        myString = "<li class='correct'>You said: " +theirAnswer+ ".  That is correct, " +userName+"!<br>" +image+ "<br></li>";
        userScore++;
      } else {
        myString = "<li class='uncorrect'>You said: " +theirAnswer+ ".  That is not correct, " +userName+".  The correct answer is " + rightAnswer + ".</li>";
      }
      return myString;
    }
    //check comparative questioins
    function checkNumber(theirAnswer, rightAnswer, image) {
      var myString = "";
      do {
        if (theirAnswer < rightAnswer) {
          theirAnswer = prompt("That is too low!  Guess again.");
        } else if (theirAnswer > rightAnswer) {
          theirAnswer = prompt("That is too high! Guess again.");
        }
      } while (theirAnswer != rightAnswer);
      if (theirAnswer == rightAnswer) {
         myString = "<li class='correct'>You said: " +theirAnswer+ ".  That is correct, " +userName+"!<br>" +image+ "<br></li>";
         userScore++;
      }
      return myString;
    }
    //check answers with multiple correct
    function checkMulti(theirAnswer, rightAnswer, image) {
      var myString = "";
      var match = false;
      for (var i = 0; i < rightAnswer.length; i++) {
        if (theirAnswer.toLowerCase() == rightAnswer[i].toLowerCase()) {
          match = true;
          break;
        }
      }
      if(match) {
        myString = "<li class='correct'>You said: " +theirAnswer+ ". That is correct, " +userName+ ".<br>" +image+ "<br></li>"
        userScore++;
      } else {
        myString = "<li class='uncorrect'>You said: " +theirAnswer+ ". That is not correct, " +userName+ ".</li>"
      }
      return myString;
    }

    return answerString;
  }
}

//create objects
var school = new gameQuestion("Where did I graduate from high school?", "Kenya", "single", "<img src='images/RiftValley200x150.jpg' alt='The entrance sign to my boarding school.' title='Rift Valley Academy'>");

var husband = new gameQuestion("Where did I meet my husband?", "Portland", "single", "<img src='images/brian_weding200x265.JPG' alt='My husband at our wedding.' title='Wedding Finery'>");

var comic = new gameQuestion("Did I work at a comic book store?", ["Yes", "Y"], "multi", "<img src='images/comic_book_cover.jpg' alt='Cover to a ficticious comic book' title='Comic Book Cover'>");

var dogs = new gameQuestion("How many dogs do I have?", 2, "number", "<img src='images/dogs_on_the_go200x150.jpg' alt='Tux and Gumdrop on a car adventure.' title='dogs on the go'>");

var guessNum = new gameQuestion("What is my number? Guess a number 1-15.", 9, "number", "<img src='images/kablam-Number-Animals-9.jpg' alt='The number 9' title='The Number 9'>");

var siblings = new gameQuestion("Name one of my siblings.", ["James", "Brent", "Maria"], "multi", "<img src='images/WinterSchoolUniforms200x269.JPG' alt='My siblings in winter school uniforms in South Africa.' title='Winter School Uniforms'>");

//call object method
function myGame() {
  var answerString = "";
  var myGameArr = [school, husband, comic, dogs, guessNum, siblings];
  for (var i = 0; i < myGameArr.length; i++) {
    answerString += myGameArr[i].checkAnswer();
  }
  return answerString;
}
