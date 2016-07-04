  var userScore = 0;
  var userName = prompt("What is your name?","");
  console.log(userName);
  alert("Thank you for visiting, " + userName + ".  I hope you enjoy your visit.");

  var answer = prompt("Where did I graduate high school?");
  console.log(answer);
  if ((answer == "Kenya") || (answer == "kenya")) {
    alert("That is correct, " + userName + "!");
    userScore++;
  } else {
    alert("I am sorry, " + userName + ".  The correct answer is Kenya.");
  }

  var answer = prompt("Where did I meet my husband?");
  console.log(answer);
  if ((answer == "Portland") || (answer == "portland")) {
    alert("That is correct, " + userName + "!");
    userScore++;
  } else {
    alert("I am sorry, " + userName + ".  The correct answer is Portland.");
  }

  var answer = prompt("Did I work at a comic book store?");
  console.log(answer);
  //add error correction
  if ((answer == "Yes") || (answer == "yes") || (answer == "YES") || (answer == "y") || (answer == "Y")) {
    alert("That is correct, " + userName + "!");
    userScore++;
  } else {
    alert("I am sorry, " + userName + ".  The correct answer is yes.");
  }

  var answer = prompt("How many dogs do I have?");
  console.log(answer);
  if (answer == 2) {
    alert("That is correct, " + userName + "!");
    userScore++;
  } else if (answer > 2) {
    alert("I am sorry, " + userName + ".  That is too high.");
  } else if (answer < 2) {
    alert("I am sorry, " + userName + ".  That is too low.");
  }

  alert("Thank you for playing, " +userName+ ".  You got " +userScore+ " correct answers.")

  var number = prompt("What is my number? Guess a number 1-15.");
  do {
    if (number < 9) {
          number = prompt("That is too low!  Guess again.");
    } else {
          number = prompt("That is too high! Guess again.");
    }
  } while (number != 9);
  if (number == 9) {
    alert("That is correct!");
  }
