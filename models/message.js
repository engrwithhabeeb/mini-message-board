const init = () => {
  let messages = [
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
  return [...messages];
}

function addMessage(user, text) {
  const added = new Date();
  messages = [...messages, {user, text, added}];
}

return {getMessages, addMessage};

};

const {addMessage, getMessages} = init();

module.exports = { addMessage, getMessages };
