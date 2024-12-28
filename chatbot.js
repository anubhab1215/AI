// chatbot.js

const chatbotButton = document.createElement('button');
chatbotButton.id = "chatbot-toggle";
chatbotButton.textContent = "Chat";
document.body.appendChild(chatbotButton);

const chatbotContainer = document.createElement('div');
chatbotContainer.id = "chatbot-container";
chatbotContainer.innerHTML = `
  <div id="chatbot-header">Chatbot</div>
  <div id="chatbot-messages"></div>
  <div id="chatbot-questions">
    <button class="chatbot-question" data-answer="AI-Solutions leverages artificial intelligence to assist industries with software solutions that improve the digital employee experience.">What does AI-Solutions do?</button>
    <button class="chatbot-question" data-answer="Our unique selling points include AI-powered virtual assistants and affordable prototyping solutions.">What are your unique selling points?</button>
    <button class="chatbot-question" data-answer="We focus on innovation, promoting digital experiences, and global impact.">What is your mission?</button>
    <button class="chatbot-question" data-answer="You can reach us through the contact form on the Contact Us page or via email at info@ai-solutions.com.">How can I contact you?</button>
    <button class="chatbot-question" data-answer="Our solutions include virtual assistants, real-time monitoring systems, and data analytics tools.">What services do you offer?</button>
  </div>
  <div id="chatbot-input-area">
    <input id="chatbot-input" type="text" placeholder="Type your message..." />
    <button id="chatbot-send">Send</button>
  </div>
`;
document.body.appendChild(chatbotContainer);

// Show/hide chatbot
chatbotButton.addEventListener('click', () => {
  chatbotContainer.style.display =
    chatbotContainer.style.display === "block" ? "none" : "block";
});

// Predefined question handling
document.querySelectorAll('.chatbot-question').forEach((button) => {
  button.addEventListener('click', () => {
    const messages = document.getElementById('chatbot-messages');
    const question = button.textContent;
    const answer = button.dataset.answer;
    messages.innerHTML += `<div>You: ${question}</div>`;
    setTimeout(() => {
      messages.innerHTML += `<div>Bot: ${answer}</div>`;
      messages.scrollTop = messages.scrollHeight;
    }, 500);
  });
});

// Send chatbot messages
document.getElementById('chatbot-send').addEventListener('click', () => {
  const input = document.getElementById('chatbot-input');
  const message = input.value;
  if (message) {
    const messages = document.getElementById('chatbot-messages');
    messages.innerHTML += `<div>You: ${message}</div>`;
    input.value = '';
    setTimeout(() => {
      messages.innerHTML += `<div>Bot: Sorry, I don't have an answer for that. Please contact support for more help!</div>`;
      messages.scrollTop = messages.scrollHeight;
    }, 1000);
  }
});
