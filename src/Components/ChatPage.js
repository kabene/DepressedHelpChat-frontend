import { RedirectUrl } from "./Router.js";
import anime from 'animejs/lib/anime.es.js';

let chatPage = `<form onsubmit="submitFeedback()" id="formFeedback">
<div id="modal-id" class="modal modal-fx-normal">
  <div class="modal-background"></div>
  <div class="modal-content modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Feedback</p>
      <span class="modal-button-close is-large delete"></span>
    </header>
    <section class="modal-card-body">
      <label class="label">Message envoyé</label>
      <div class="control">
      <textarea class="textarea is-primary cmd_content dash-inputs" rows="3" name="sentmessage" minlength="1" required style="width: 800px;"></textarea>
    </div>
      <div class="field">
        <label class="label">Message reçu</label>
        <div class="control">
      <textarea class="textarea is-primary cmd_content dash-inputs" rows="3" name="receivedmessage" minlength="1" required style="width: 800px;"></textarea>
    </div>
      </div>
      <div class="field">
        <label class="label">Type de message désiré (optionnel)</label>
        <div class="control">
      <textarea class="textarea is-primary cmd_content dash-inputs" rows="3" name="desiredmessage" style="width: 800px;"></textarea>
    </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button type="submit" class="button is-success" id="sendFeedback">Envoyer</button>
    </footer>
  </div>
</div>
</form>

<div id="menuContainer">
    <button id="help" > ?</button>
    <button id="endButton">Terminer la discussion</button>
</div>
<div id="chatbox"></div>
<div id="containerDot">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  &nbsp &nbsp Votre partenaire est en train d'écrire...
</div>
<input type="text" id="messageBar" autocomplete="off">
<div id="sendButton">Envoyer</div>
`;

const ChatPage = async (e) => {
  let page = document.querySelector("#page");
  page.innerHTML = chatPage;
  document.querySelector("#containerDot").style.display="none";
  onBotResponse({answer:"Bonjour, comment vas-tu ? "});
  let helpButton = document.querySelector('#help');
  let endButton = document.querySelector('#endButton');
  let sendButton = document.querySelector('#sendButton');
  let messageBar = document.querySelector('#messageBar');
  let feedbackButton = document.querySelector('#sendFeedback');

  helpButton.addEventListener("click", onHelp);

  messageBar.addEventListener("keyup", onEnter);
  sendButton.addEventListener("click", onSend);
  feedbackButton.addEventListener("click",submitFeedback);
  modal(document);

  endButton.addEventListener("click",onEnd);
};

const modal = (document)=>{
  (function () {
    var modalFX = (function () {
  
        var elements = {
            target: 'data-target',
            active: 'is-active',
            button: '.modal-button',
            close: '.modal-close',
            buttonClose: '.modal-button-close',
            background: '.modal-background'
        };
  
        var onClickEach = function (selector, callback) {
            var arr = document.querySelectorAll(selector);
            arr.forEach(function (el) {
                el.addEventListener('click', callback);
            })
        };
  
        var events = function () {
            onClickEach(elements.button, openModal);
  
            onClickEach(elements.close, closeModal);
            onClickEach(elements.buttonClose, closeAll);
            onClickEach(elements.background, closeModal);
  
            // Close all modals if ESC key is pressed
            document.addEventListener('keyup', function(key){
                if(key.keyCode === 27) {
                    closeAll();
                }
            });
        };
  
        var closeAll = function() {
            var openModal = document.querySelectorAll(".modal");
            openModal.forEach(function (modal) {
                modal.classList.remove(elements.active);
            })
            unFreeze();            
        };
  
        var openModal = function () {
            var modal = this.getAttribute(elements.target);
            freeze();
            document.getElementById(modal).classList.add(elements.active);
        };
  
        var closeModal = function () {
            var modal = this.parentElement.id;
            document.getElementById(modal).classList.remove(elements.active);
            unFreeze();
        };
  
        // Freeze scrollbars
        var freeze = function () {
            document.getElementsByTagName('html')[0].style.overflow = "hidden"
            document.getElementsByTagName('body')[0].style.overflowY = "scroll";
        };
        
        var unFreeze = function () {
            document.getElementsByTagName('html')[0].style.overflow = ""
            document.getElementsByTagName('body')[0].style.overflowY = "";
        };
  
        return {
            init: function () {
                events();
            }
        }
    })();
  
    modalFX.init();
  
  })();
}
const submitFeedback = (e)=>{
  e.preventDefault();
  var formData = new FormData(document.getElementById("formFeedback"));
  var string=[];
  for(var pair of formData.entries()){
    string.push(`${pair[0]}=${pair[1]}`);
  }
  console.log(formData.keys());
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `/api/feedback?${string.join("&")}`, true);
  xhr.send(null);
  let modal= document.getElementById('modal-id');
  modal.classList.remove('is-active');
}

const onHelp = (e) => {
  // Code for the ? button
  document.getElementsByTagName('html')[0].style.overflow = "hidden"
  document.getElementsByTagName('body')[0].style.overflowY = "scroll";
  let modal= document.getElementById('modal-id');
  modal.classList.add('is-active'); 
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

const onEnd = (e) => {
 // console.log("onEnd");
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  deleteAllCookies();
  RedirectUrl("/endPage");
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
  document.querySelector("#containerDot").style.display="initial";
  let anim = anime({
    targets: '.dot',
    translateY: -25,
    direction: 'alternate',
    loop: true,
    duration: 1500,
    easing: function(el, i, total) {
      return function(t) {
        return Math.pow(Math.sin(t * (i + 1)), total);
      }
    }
  });
  anim.play();
  let reponse = data.answer;
  let chatBubble = document.createElement('div');
  let chatBubbleContent = document.createTextNode(reponse);
  chatBubble.appendChild(chatBubbleContent);
  chatBubble.classList.add("boxBot", "sb14");
  setTimeout(() => {  
    anim.pause(); 
    let chatBox = document.querySelector('#chatbox');
    chatBox.appendChild(chatBubble);

    chatBox.scrollTop = chatBox.scrollHeight;
    anim.restart();
    anim.pause();
    document.querySelector("#containerDot").style.display="none";
  }, reponse.split(" ").length*250);
}

const onError = (err) => {
  let messageBoard = document.querySelector("#messageBoard");
  let errorMessage = "";
  if (err.message.includes("409")) errorMessage = "This user is already registered.";
  else errorMessage = err.message;
  console.log(errorMessage);
};



export default ChatPage;