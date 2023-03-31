var readlineSync = require('readline-sync');
var userName = readlineSync.question("Please, Enter your name ");
console.log(userName + " Welcome to the quiz");
var score = 0;
var highScore = [{
  name :"Mona",
  score :50
}
]
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 10
    console.log("You are right. Current score is ", score);
  }
  else {
    score = score + 0
    console.log("Wrong. Your current score is ", + score);
  }
  console.log("Your final score is " + score)
}
//creating array of object
var questions = [{
  q: "What is capital of Maharashtra ",
  ans: "MUMBAI"
},{
  q: "What is capital of India ",
  ans: "DELHI"
  
},{
  q: "What national flower of India ",
  ans: "LOTUS"
  
},{
  q: "What is national bird of India ",
  ans: "PEACOCK"
  
},{
  q: "What is national animal of India ",
  ans: "TIGER"
  
}]
// loop for question
for (var i =0; i<questions.length; i++)
     {
  var currentQuestion = questions[i];
  play(currentQuestion.q, currentQuestion.ans)
}
for (var j=0;j<highScore.length; j++)
{
  var currentHighScore = highScore[j];
   if (currentHighScore.score === score){
     console.log("You have highest score in this quiz")      
}
else{console.log("Current Highscore is "+ currentHighScore.score +". Better luck next time")}}
