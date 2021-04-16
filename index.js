// startButton
startButton = document.getElementById('start');
startButton.addEventListener('click', (e) => {
    var selected = category.options[category.selectedIndex].value;

    if (1 == selected) {
        return window.location.assign('./general/generalquiz.html');
    } else {
        return window.location.assign('./computer/computerquiz.html');

    }
});

// HighScore List
startHighScore = document.getElementById('score');
startHighScore.addEventListener('click', (e) =>{
    return window.location.assign('./highscores/highscores.html');
});