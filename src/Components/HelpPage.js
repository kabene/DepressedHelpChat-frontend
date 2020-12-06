//import { RedirectUrl } from "./Router.js";

let HelpPage = ` <form method = POST>
<label for="retourClient">Donnez-nous un conseil afin d'améliorer notre application! :-)</label>
<br><br>
<input type="text" class="form-control" id="retourClient">
</form>
<br>
<button type="button" class="btn btn-secondary" id="sendButton">Envoyer</button>
<br><br>
<p>L'équipe de développement vous remercie pour votre aide ! </p>
`;

const HelpPage = async (e) => {
  let page = document.querySelector("#page");
  page.innerHTML = helpPage;
  let sendButton = document.querySelector('#sendButton');

  sendButton.addEventListener("click", onSend);

};

const onSend = (e) => {
  //TODO
}  



export default HelpPage;