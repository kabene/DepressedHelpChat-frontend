let navBar = document.querySelector("#navBar");
import {getUserSessionData} from "../utils/session.js";
// destructuring assignment
const Navbar = () => {
  let navbar;
  let user = getUserSessionData();    
  if (user) {
    navbar = ``;
  } else {
    navbar = ``;
  }

  return (navBar.innerHTML = navbar);
};

export default Navbar;
