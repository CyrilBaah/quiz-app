const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const generalQuizHighScores = JSON.parse(localStorage.getItem('generalQuizHighScores')) || [];
console.log(generalQuizHighScores);


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
    generalQuizHighScores.push(score);
    generalQuizHighScores.sort((a, b) => b.score - a.score);
    generalQuizHighScores.splice(5);

    localStorage.setItem('generalQuizHighScores', JSON.stringify(generalQuizHighScores));

    window.location.assign('/');
};

