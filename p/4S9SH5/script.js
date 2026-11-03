let score = 0;

const scoreDisplay = document.getElementById('score');
const clickBtn = document.getElementById('click-btn');

clickBtn.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});
