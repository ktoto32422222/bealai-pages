const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    userInput.value = '';

    // Имитация ответа Свена
    setTimeout(() => {
        let reply = "Интересный вопрос! Я Свен, думаю над этим.";
        if (text.toLowerCase().includes('привет')) {
            reply = "И тебе привет! Чем порадуешь?";
        }
        addMessage(reply, 'ai');
    }, 1000);
}

function sendGift(giftName) {
    addMessage(`Отправлен NFT-подарок: ${giftName}`, 'user');
    setTimeout(() => {
        addMessage(`Вау! Спасибо за подарок "${giftName}", он добавлен в мою коллекцию! 🎁`, 'ai');
    }, 1000);
}

sendBtn.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserMessage();
    }
});
