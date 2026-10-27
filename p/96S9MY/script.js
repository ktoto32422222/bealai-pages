let score = 0;
let clickPower = 1;
let autoClickers = 0;
let autoCost = 15;
let powerCost = 50;

const scoreEl = document.getElementById('score');
const cpsEl = document.getElementById('cps');
const clickBtn = document.getElementById('click-btn');
const buyAutoBtn = document.getElementById('buy-auto');
const buyPowerBtn = document.getElementById('buy-power');
const costAutoEl = document.getElementById('cost-auto');
const costPowerEl = document.getElementById('cost-power');

clickBtn.addEventListener('click', () => {
    score += clickPower;
    updateUI();
});

buyAutoBtn.addEventListener('click', () => {
    if (score >= autoCost) {
        score -= autoCost;
        autoClickers += 1;
        autoCost = Math.floor(autoCost * 1.5);
        updateUI();
    }
});

buyPowerBtn.addEventListener('click', () => {
    if (score >= powerCost) {
        score -= powerCost;
        clickPower += 1;
        powerCost = Math.floor(powerCost * 1.8);
        updateUI();
    }
});

function updateUI() {
    scoreEl.textContent = score;
    cpsEl.textContent = autoClickers;
    costAutoEl.textContent = autoCost;
    costPowerEl.textContent = powerCost;
}

// Автокликер работает каждую секунду
setInterval(() => {
    if (autoClickers > 0) {
        score += autoClickers;
        updateUI();
    }
}, 1000);
