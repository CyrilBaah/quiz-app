const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const computerQuizHighScores = JSON.parse(localStorage.getItem('computerQuizHighScores')) || [];
console.log(computerQuizHighScores);


const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    computerQuizHighScores.push(score);
    computerQuizHighScores.sort((a, b) => b.score - a.score);
    computerQuizHighScores.splice(5);

    localStorage.setItem('computerQuizHighScores', JSON.stringify(computerQuizHighScores));

    window.location.assign('/');
};

