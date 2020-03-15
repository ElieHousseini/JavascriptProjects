function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  let correct = 0;
  if (question1 == "Providence") {
    correct++;
  }
  if (question2 == "Hartford") {
    correct++;
  }
  if (question3 == "Albany") {
    correct++;
  }

  var messages = [
    "Great job!",
    "That's just okey",
    "You really need to do better"
  ];

  var pictures = [
    "images/congrads.jpg",
    "images/itsOkay.jpg",
    "images/fail1.jpg"
  ];

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[3 - correct];
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[3 - correct];
}
