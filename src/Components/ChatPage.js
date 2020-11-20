let chatPage = `<div id="menuContainer">
<div id="help">?</div>
<div id="endButton">Terminer la discussion</div>
</div>
<div id="chatbox"></div>
<input type="text" id="messageBar">
<div id="sendButton">Envoyer</div>
`;

const ChatPage = async () => {
  let page = document.querySelector("#page");
  page.innerHTML = chatPage;

  let helpButton = document.querySelector('#help');
  let endButton = document.querySelector('#endButton');
  let sendButton = document.querySelector('#sendButton');

  helpButton.addEventListener("submit", onHelp);
  endButton.addEventListener("submit", onEnd);
  sendButton.addEventListener("submit", onSend);
};

const onHelp = (e) => {
  // Code for the ? button 
}

const onEnd = (e) => {
  // Celestin code should be here!
}

const onSend = (e) => {
  // Anatole code should be here!
}

export default ChatPage;