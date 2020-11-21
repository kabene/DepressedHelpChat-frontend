import { setLayout } from "./utils/render.js";
import {Router} from "./Components/Router.js";


/* use webpack style & css loader*/
import "./stylesheets/style.css";
/* load bootstrap css (web pack asset management) */
import 'bootstrap/dist/css/bootstrap.css';
/* load bootstrap module (JS) */
import 'bootstrap';


Router();

setLayout(undefined);
