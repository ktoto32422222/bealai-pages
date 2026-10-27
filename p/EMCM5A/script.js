document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messagesContainer');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const text = messageInput.value.trim();
        if (text === '') return;

        appendMessage(text, 'outgoing');
        messageInput.value = '';
        
        setTimeout(() => {
            appendMessage('Это автоматический ответ.', 'incoming');
        }, 1000);
    });

    function appendMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);

        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.innerHTML = `
            <p>${escapeHtml(text)}</p>
            <span class="time">${timeString}</span>
        `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
});
