var readlineSync = require("readline-sync");

var score = 0;

const highScores = [
  {
    name: "Darshan",
    score: 5,
  },
  {
    name: "hohenhiem",
    score: 4,
  },
];

const questions = [
  {
    question: "Where do I live?",
    options: ["banglore", "mumbai", "delhi"],
    answer: "mumbai",
  },
  {
    question: "Which is my favourite programming language?",
    options: ["c++", "python", "javascript"],
    answer: "javascript",
  },
  {
    question: "which pet do I like?",
    options: ["dogs", "cats", "rabbits"],
    answer: "cats",
  },
  {
    question: "Which subject do I like?",
    options: ["math", "chemistry", "history"],
    answer: "math",
  },
  {
    question: "Which are my favourite playing cards?",
    options: ["bicycle", "memento mori", "echo"],
    answer: "memento mori",
  },
];

const welcome = () => {
  let userName = readlineSync.question("Enter your name: ");

  console.log(
    `<----- Welcome, ${userName} -----> \nLet's play DO YOU KNOW Darshan?`
  );
};

const game = () => {
  questions.forEach((e) => {
    play(e.question, e.options, e.answer);
  });
};

const play = (question, options, answer) => {
  let userAnswer = readlineSync.question(
    `${question}\nYour options are: ${options[0]}, ${options[1]}, ${options[2]} \n`
  );
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score += 1;
    console.log("right! :)");
  } else {
    console.log("wrong! :(");
  }

  console.log(`current score: ${score} \n-----------------`);
};

const showScores = () => {
  console.log(`YAY! Your SCORE: ${score}`);
  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );
  highScores.forEach((score) => console.log(`${score.name} : ${score.score}`));
};

welcome();
game();
showScores();
