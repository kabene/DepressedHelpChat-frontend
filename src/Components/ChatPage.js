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
}

export default ChatPage;