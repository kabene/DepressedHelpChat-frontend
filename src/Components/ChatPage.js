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
  endPageAdd();
 // let helpButton = document.querySelector('#help');
 // let sendButton = document.querySelector('#sendButton');
 // helpButton.addEventListener("submit", onHelp);
 // sendButton.addEventListener("submit", onSend);
};
const endPageAdd =()=>{
  /*
  fetch("/api/user", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(user), // body data type must match "Content-Type" header
    headers: {
      "Content-Type": "application/json",
    },
  })
      .then((response) => {
        if (!response.ok)
          throw new Error(
              "Error code : " + response.status + " : " + response.statusText
          );
        return response.json();
      })
      .then((data) => onUserLogin(data))
      .catch((err) => onError(err));
  */


  helpButton.addEventListener("click", onHelp);
  endButton.addEventListener("click", onEnd);
  sendButton.addEventListener("click", onSend);
};

  let endPage=document.querySelector("#endButton");
  endPage.onclick= EndPage;
}

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