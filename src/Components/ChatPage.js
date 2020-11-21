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

  helpButton.addEventListener("click", onHelp);
  endButton.addEventListener("click", onEnd);
  sendButton.addEventListener("click", onSend);
};

const onHelp = (e) => {
  // Code for the ? button 
}

const onEnd = (e) => {
  // Celestin code should be here!
}

const onSend = (e) => {
  // Anatole code should be here!
  let message = document.querySelector('#messageBar');

  // trim() removes the whitespaces at the beggining --> " Bonjour" => "Bonjour" | "     " => ""
  if(message.value.trim() != ""){
    let chatBubble = document.createElement('div');
    let chatBubbleContent = document.createTextNode(message.value);
    chatBubble.appendChild(chatBubbleContent);
    chatBubble.classList.add("box3", "sb13");

    let chatBox = document.querySelector('#chatbox');
    chatBox.appendChild(chatBubble);
    
    chatBox.scrollTop = chatBox.scrollHeight;

    console.log(message.value)
  }
  
  message.value = "";
}

export default ChatPage;