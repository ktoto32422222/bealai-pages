let score = 0;
let totalClicks = 0;
let clickPower = 1;
let autoClickers = 0;
let autoCost = 15;
let powerCost = 50;

const scoreEl = document.getElementById('score');
const clickCountEl = document.getElementById('click-count');
const cpsEl = document.getElementById('cps');
const clickBtn = document.getElementById('click-btn');
const buyAutoBtn = document.getElementById('buy-auto');
const buyPowerBtn = document.getElementById('buy-power');
const costAutoEl = document.getElementById('cost-auto');
const costPowerEl = document.getElementById('cost-power');

clickBtn.addEventListener('click', () => {
    score += clickPower;
    
    if (totalClicks < 100) {
        totalClicks += 1;
        
        // Проверяем, кратно ли количество кликов 10 и не превышает ли 100
        if (totalClicks % 10 === 0) {
            let bonus = totalClicks * 2; // Бонус зависит от текущего уровня десятков
            score += bonus;
            alert(`Поздравляем! Достигнуто ${totalClicks} кликов! Бонус: +${bonus} монет.`);
        }
    }
    
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
    clickCountEl.textContent = totalClicks;
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
