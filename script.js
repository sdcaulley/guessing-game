  var userScore = 0;
  var userName = null;

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
      myInnerHTML += schoolQuestion();
      myInnerHTML += husbandQuestion();
      myInnerHTML += storeQuestion();
      myInnerHTML += dogQuestion();
    }
    myInnerHTML += "</ol><p>Congratulations, " +userName+ "!  You have " +userScore+ " correct answers.</p>";
    answer.innerHTML = myInnerHTML;
  }

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

  function greetUser(name) {
    var greeting = "<p>Thank you for visiting, "
    if (name != "") {
      greeting += name + "."
    }
    greeting += "  I hope you enjoy your visit.</p>";
    return greeting;
    console.log(greeting);
  }

function schoolQuestion() {
  var userAnswer = prompt("Where did I graduate high school?");
  console.log(userAnswer);
  if ((userAnswer == "Kenya") || (userAnswer == "kenya")) {
    answerString = "<li>You said: " +userAnswer+ ".  That is correct, " +userName+"!</li>";
    userScore++;
  } else {
    answerString = "<li>You said: " +userAnswer+ ".  That is not correct, " +userName+".  The correct answer is Kenya.</li>";  }
  return answerString;
}

function husbandQuestion() {
  var userAnswer = prompt("Where did I meet my husband?");
  console.log(userAnswer);
  if ((userAnswer == "Portland") || (userAnswer == "portland")) {
    answerString = "<li>You said: " +userAnswer+ ".  That is correct, " +userName+"!</li>";
    userScore++;
  } else {
    answerString = "<li>You said: " +userAnswer+ ".  That is not correct, " +userName+".  The correct answer is Portland.</li>";  }
  return answerString;
}

function storeQuestion() {
  var userAnswer = prompt("Did I work at a comic book store?");
  console.log(userAnswer);
  //add error correction
  if ((userAnswer == "Yes") || (userAnswer == "yes") || (userAnswer == "YES") || (userAnswer == "y") || (userAnswer == "Y")) {
    answerString = "<li>You said: " +userAnswer+ ".  That is correct, " +userName+"!</li>";
    userScore++;
  } else {
    answerString = "<li>You said: " +userAnswer+ ".  That is not correct, " +userName+".  The correct answer is yes.</li>";  }
  return answerString;
}

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
    numGame.innerHTML = "You said: " +number+ ".  That is correct, " +userName+"!";
  }
}
