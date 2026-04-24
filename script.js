const questions = [
  {
    question: "What is HTML?",
    options: ["Language", "Database", "OS", "Server"],
    answer: "Language"
  },
  {
    question: "What is CSS?",
    options: ["Styling", "AI", "Backend", "Cloud"],
    answer: "Styling"
  }
];

let current = 0;

function loadQuestion() {
  document.getElementById("question").innerText =
    questions[current].question;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  questions[current].options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => {
      if (option === questions[current].answer) {
        alert("Correct ✅");
      } else {
        alert("Wrong ❌");
      }
    };

    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz Finished 🎉");
  }
}

loadQuestion();

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText =
        data.setup + " 😂 " + data.punchline;
    });
}
