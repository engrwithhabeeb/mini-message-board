const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hi World!",
    user: "Charles",
    added: new Date(),
  },
];

function getMessages() {
  return messages;
}

function addMessage(user, text) {
  messages.push({
    text,
    user,
    added: new Date(),
  });
}

module.exports = { addMessage, getMessages };
