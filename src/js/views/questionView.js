export const elements = {
    questionHolder: document.querySelector('.search__field'),
    globalChat: document.querySelector('.chat__list')
};

export const getQuestion = () => { 
    return elements.questionHolder.value;
};

export const addMsg = (sender, question) => {
    const chatItem = `
    <li>
        <b>${sender}</b> ${question}
    </li>
    `;
    elements.globalChat.insertAdjacentHTML('beforeend', chatItem);
};

export const clearInput = () => {
    elements.questionHolder.value = "";
};

export const initChat = () => {
    elements.globalChat.innerHTML = localStorage.getItem('chat');
}