import { RedirectUrl } from "./Router";

let endPage = `<div class="gc">
    <p>Merci d'avoir utilisé le service et courage!</p>
    <br>
    <p>Nous vous rappelons ques vos données ont bien été supprimées!</p>
    <br>
    <p>Passez une excellente journée! :)</p>
    <br>
</div>
<p id="pc">L'équipe de développement</p>
<br><br>
<button type="button" class="btn btn-secondary" id="btnRel">Relancer une discussion</button>`;

const EndPage = () => {
  //setLayout("EndPage");
  let page = document.querySelector("#page");
  page.innerHTML = endPage;
  let btnRel = document.querySelector('#btnRel');

  btnRel.addEventListener("click",onRel);
};

const onRel = (e) =>{
  RedirectUrl("/");
}

export default EndPage;