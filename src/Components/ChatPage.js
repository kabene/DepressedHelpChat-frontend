import EndPage from "./EndPage";

let chatPage = `<div id="menuContainer">
    <button id="help" > ?</button>
    <button  id="endButton" data-uri="/EndPage">Terminer la discussion</button>
</div>
<div id="chatbox"></div>
<input type="text" id="messageBar">
<div id="sendButton">Envoyer</div>
`;

const ChatPage = async (e) => {
  e.preventDefault();
  let page = document.querySelector("#page");
  page.innerHTML = chatPage;

  let helpButton = document.querySelector('#help');
  let endButton = document.querySelector('#endButton');
  let sendButton = document.querySelector('#sendButton');
  let messageBar = document.querySelector('#messageBar');

  helpButton.addEventListener("click", onHelp);

  messageBar.addEventListener("keyup", onEnter);
  sendButton.addEventListener("click", onSend);

  let endPage=document.querySelector("#endButton");
  endPage.onclick= EndPage;
};


const onHelp = (e) => {
  // Code for the ? button 
}

const onEnter = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    onSend();
  }
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

    // faire fetch au backend
    let userMessage = {
      message : document.querySelector('#messageBar').value,
    };
    fetch("/api/users/handleUserMessage", {
      method: "POST",
      body: JSON.stringify(userMessage), // body data type must match "Content-Type" header
      headers: {
          "Content-Type": "application/json",
      },
    })
      .then((response) => {
          if (!response.ok) throw new Error("Error code : " + response.status + " : " + response.statusText);
          return response.json();
      })
      .then((data) => onBotResponse(data))
      .catch((err) => onError(err));
  }
  message.value = "";
  document.querySelector('#messageBar').focus();
}

const onBotResponse = (data) =>{
  // Similaire à onSend mais pour le bot + CSS à add
  let reponse = data.answer;
  let chatBubble = document.createElement('div');
  let chatBubbleContent = document.createTextNode(reponse);
  chatBubble.appendChild(chatBubbleContent);
  chatBubble.classList.add("boxBot", "sb14");

  let chatBox = document.querySelector('#chatbox');
  chatBox.appendChild(chatBubble);

  chatBox.scrollTop = chatBox.scrollHeight;

}

const onError = (err) => {
  let messageBoard = document.querySelector("#messageBoard");
  let errorMessage = "";
  if (err.message.includes("409")) errorMessage = "This user is already registered.";
  else errorMessage = err.message;
  console.log(errorMessage);
};

export default ChatPage;