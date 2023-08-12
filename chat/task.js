const chatWidget = document.querySelector('.chat-widget')
const inputMessage = document.querySelector('.chat-widget__input')
const chatMessages = document.querySelector('.chat-widget__messages')

chatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));

inputMessage.addEventListener('change', () => {
    sendMsg(inputMessage.value, 'message_client');
    sayBot();
});

function sendMsg(text, sender) {
    chatMessages.innerHTML += `
    <div class="message ${sender}">
        <div class="message__time">${new Date().toTimeString().substring(0,5)}</div>
        <div class="message__text">
            ${text}
        </div>
    </div>`;
    inputMessage.value = '';
};

function sayBot () {
    const messageRobot = [
        'Мы нечего не будем вам продавать!',
        'Кто тут?',
        'Вы не купили не одного товара, что б так с нами разговаривать!',
        'Где ваша совесть?',
        'К сожалению  все операторы сейчас заняты! Не пишите нам больше!',
        'Добрый день! До свидания!',
        
    ];
    let index = Math.floor(Math.random() * messageRobot.length);
    chatMessages.innerHTML += `
    <div class="message">
        <div class="message__time">${new Date().toTimeString().substring(0,5)}</div>
        <div class="message__text">
            ${messageRobot[index]}
        </div>
    </div>`;
}

