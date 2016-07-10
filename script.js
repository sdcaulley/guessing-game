// global variables needed by all functions
var userScore = 0;
var userName = null;

//master game function
function guess() {
  var answer = document.getElementById("answer");
  var myInnerHTML = "";
  console.log(answer);

  if (userName == null) {
    userName = getUserName();
  }

  myInnerHTML = greetUser(userName);
  myInnerHTML += "Here are your answers: <ol>"

  if (userName != "") {
    myInnerHTML += questionLoop();
    myInnerHTML += dogQuestion();
  }

  myInnerHTML += "</ol><p>Congratulations, " +userName+ "!  You have " +userScore+ " correct answers.</p>";
  myInnerHTML += guessNumber();

  answer.innerHTML = myInnerHTML;
}

// ask for the user's name
function getUserName () {
  var userName = "";
  while ((userName.trim() == "") && (userName != null)) {
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
  console.log(greeting);
}

// first three qustions in an array/loop set up
function questionLoop() {
  var arrQuestion = ["Where did I graduate high school?","Where did I meet my husband?","Did I work at a comic book store?"];
  var arrAnswer = ["Kenya","Portland","Yes"];
  var answerString = "Here are your answers to the game: <ol>";

  for (i = 0; i < arrQuestion.length; i++) {
    var userAnswer = prompt(arrQuestion[i]);
    if (userAnswer.toLowerCase() == arrAnswer[i].toLowerCase()) {
      answerString += "<li>You said: " +userAnswer+ ".  That is correct, " +userName+"!</li>";
      userScore++;
    } else {
      answerString += "<li>You said: " +userAnswer+ ".  That is not correct, " +userName+".  The correct answer is " + arrAnswer[i] + ".</li>";
      }
    }
  return answerString;
}

// guess the number of dogs with three comparisons for answers
function dogQuestion() {
  var userAnswer = prompt("How many dogs do I have?");
  console.log(userAnswer);
  if (userAnswer == 2) {
    answerString = "<li>You said: " +userAnswer+ ".  That is correct, " +userName+"!</li>";
    userScore++;
  } else if (userAnswer > 2) {
    answerString = "<li>You said: " +userAnswer+ "I am sorry, " + userName + ".  That is too high.</li>";
  } else if (userAnswer < 2) {
    answerString = "<li>You said: " +userAnswer+ "I am sorry, " + userName + ".  That is too low.</li>";
  }
  return answerString;
}

// guess my number
function guessNumber() {
  var number = prompt("What is my number? Guess a number 1-15.");
  do {
    if (number < 9) {
          number = prompt("That is too low!  Guess again.");
    } else if (number > 9) {
          number = prompt("That is too high! Guess again.");
    }
  } while (number != 9);
  if (number == 9) {
     answerString = "You said: " +number+ ".  That is correct, " +userName+"!";
  }
  return answerString;
}

// question with three correct ansewers.  loop through array
function bonusQuestion() {
  var match = false;
  var arrAnswer = ["James", "Brent", "Maria"];
  var userAnswer = prompt("Name one of my siblings.");
  for (i = 0; i < arrAnswer.length; i++) {
    if (userAnswer.toLowerCase() == arrAnswer[i].toLowerCase()) {
      match = true;
      break;
    }
  }
  var statement = document.getElementById("bonus");
  if(match) {
    statement = "You said: " +userAnswer+ " . That is correct " +userName+ "."
  } else {
    statement = "You said: " +userAnswer+ " . That is not correct " +userName+ " ."
  }
  bonus.innerHTML = statement;
}
