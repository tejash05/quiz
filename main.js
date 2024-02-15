const questions = [
  {
    question:' Which planet is known as the "Red Planet"?',
    answers:[
      { text: "Mars",correct: true},
      { text: "Venus",correct: false},
      { text: "Jupiter",correct: false},
      { text: "Saturn",correct: false},
    ]
  },
  {
    question:' What is the largest ocean on Earth?',
    answers:[
      { text: "Atlantic Ocean",correct: false},
      { text: "Indian Ocean",correct: false},
      { text: "Southern Ocean",correct: false},
      { text: "Pacific Ocean",correct: true},
    ]
  },

  {
    question:' Which famous scientist developed the theory of general relativity?',
    answers:[
      { text: "Isaac Newton",correct: false},
      { text: "Albert Einstein",correct: true},
      { text: " Galileo Galilei",correct: false},
      { text: "Marie Curie",correct: false},
    ]
  },

  {
    question:' What is the capital city of Japan?',
    answers:[
      { text: "Seoul",correct: false},
      { text: "Beijing",correct: false},
      { text: "Tokyo",correct: true},
      { text: "Bangkok",correct: false},
    ]
  },

  {
    question:' In which year did the United States declare its independence?',
    answers:[
      { text: "1676",correct: false},
      { text: "1776",correct: true},
      { text: "1876",correct: false},
      { text: "1976",correct: false},
    ]
  },

  {
    question:' What is the largest mammal in the world?',
    answers:[
      { text: "African Elephant",correct: false},
      { text: "Blue Whale",correct: true},
      { text: "Giraffe",correct: false},
      { text: "Polar Bear",correct: false},
    ]
  },

  {
    question:'Which planet is known as the "Morning Star" or the "Evening Star" depending on its appearance in the sky?',
    answers:[
      { text: "Venus",correct: true},
      { text: "Mars",correct: false},
      { text: "Jupiter",correct: false},
      { text: "Mercury",correct: false},
    ]
  },

  {
    question:'What is the currency of Japan?',
    answers:[
      { text: "Yen",correct: true},
      { text: "Won",correct: false},
      { text: "Ringgit",correct: false},
      { text: "Baht",correct: false},
    ]
  },

  {
    question:' Who is the author of the famous play "Romeo and Juliet"?',
    answers:[
      { text: "Charles Dickens",correct: false},
      { text: "William Shakespeare",correct: true},
      { text: "Jane Austen",correct: false},
      { text: "Mark Twain",correct: false},
    ]
  },

  {
    question:" Which gas makes up the majority of Earth's atmosphere?",
    answers:[
      { text: "Oxygen",correct: false},
      { text: "Nitrogen",correct: true},
      { text: "Carbon Dioxide",correct: false},
      { text: "Hydrogen",correct: false},
    ]
  }
];

const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");

let currentindex= 0;
let score=0;


function startQuiz(){
  currentindex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentindex];
  let questionno = currentindex + 1;
  questionElement.innerHTML = questionno + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct =answer.correct;
    }
    button.addEventListener("click",SelectAnswer);
  });
}
function resetState(){
  nextButton.style.display="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function SelectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
    nextButton.innerHTML="Next";
  }else{
    selectedBtn.classList.add("incorrect");
    showScore();
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled =true;
  });
  nextButton.style.display="block";
}
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
  nextButton.innerHTML = "Play gain";
  nextButton.style.display ="block";
  currentindex=-1;
}

function handleNextButton(){
  currentindex++;
  if(currentindex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if(currentindex < questions.length){
      handleNextButton();
  }else{
    startQuiz();
  }
})
startQuiz();

