// SelectedCategory HighScore
selectedCategory = document.getElementById('category');
selectedCategory.addEventListener('click', (e) => {
  var selected = category.options[category.selectedIndex].value;

  if (1 == selected) {
    generalScoreList();
  } else {
    computerScoreList();
  }
});

// GeneralQuiz HighScores List
generalScoreList = () => {
  const highScoresList = document.getElementById("highScoresList");
  const highScores = JSON.parse(localStorage.getItem("generalQuizHighScores")) || [];

  highScoresList.innerHTML = highScores
    .map(score => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
};

// ComputerQuiz HighScores List
computerScoreList = () => {
  const highScoresList = document.getElementById("highScoresList");
  const highScores = JSON.parse(localStorage.getItem("computerQuizHighScores")) || [];

  highScoresList.innerHTML = highScores
    .map(score => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
};