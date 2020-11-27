

import {setLayout} from "../utils/render.js";
import {setUserSessionData} from "../utils/session.js"; //getUserSessionData pour relancer la conversation
//import ChatPage from "./ChatPage";
import { RedirectUrl } from "./Router.js";

let homePage = `<div class="container body-content">
<div class="container">
    <div class="row justify-content-center" style="padding-top:10px;">
        <img alt="Image html" width="50%" height="90%" style="max-height:500px;max-width:500px;"
            src="https://cdn.discordapp.com/attachments/770010112139853894/778555438005485568/Screenshot_2020-11-18_unknown_png_-_Vector_Magic.png"/>
    </div>
    <form method="post" >
        <div class="row justify-content-center">
            <div class="col-xs-4">
                <div class="row justify-content-center" style="padding-top:10px;">
                    <input class="form-control" id="name" type="text" name="name" placeholder="entrez un prénom">
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xs-3 col-md-5 col-sm-4" >
                <div class="row justify-content-center" style="padding-top:10px;">
                    <button class="btn btn-primary" type="submit" id="btnChatPage">Lancer la discussion</button>
                </div>
            </div>
        </div>
    </form>
    <div class="row justify-content-center" style="padding-top:10px;">
        <label>Cette application est un chatbot qui a pour objectif d&#39;aider des personnes a soucis emotionnels.<br/>
        Discutez avec lui, dites lui ce que vous desirez !</label>
    </div>
    <div class="hidden gone" id="gdpr--cookie-policy-root">
        <style>#gdpr--cookie-policy-root{box-sizing:border-box;bottom:0;left:0;padding:30px 30px 20px;position:fixed;background:white;box-shadow:0 -4px 6px -4px rgba(0,0,0,.3);width:100%;background:#333;color:#f3f3f3;z-index:99999!important;transition:all .6s ease-out}#gdpr--cookie-policy-root.hidden{-webkit-transform:translate(0,100%);transform:translate(0,100%);opacity:0}#gdpr--cookie-policy-root.gone{display:none}#gdpr--cookie-policy-root a{color:white;font-weight:700;text-decoration:underline!important;font-size:14px}#gdpr--cookie-policy-root a:hover{text-decoration:none!important}#gdpr--cookie-policy-root .gdpr--cookie-policy-content{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#gdpr--cookie-policy-root .gdpr--cookie-policy-content div{width:100%;padding:0;margin-bottom:30px;font-size:14px;line-height:21px}#gdpr--cookie-policy-root .gdpr--cookie-policy-content .gdpr--cookie-policy-actions{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;margin-bottom:0}#gdpr--cookie-policy-root .gdpr--cookie-policy-content .gdpr--cookie-policy-actions button{display:block;background:transparent;border:2px solid white;color:white;padding:1px 10px!important;transition:all .2s ease-in;cursor:pointer;border-radius:4px;text-align:center;text-decoration:none;font-size:13.333px;line-height:36px;font-weight:700;justify-content:center;display:flex;flex-direction:column;align-items:center;white-space:nowrap;margin:5px}#gdpr--cookie-policy-root .gdpr--cookie-policy-content .gdpr--cookie-policy-actions button:hover{background:#d9d9d9;border-color:#d9d9d9;color:#333}#gdpr--cookie-policy-root .gdpr--cookie-policy-content .gdpr--cookie-policy-actions button.gdpr--cookie-accept:hover{background:green;border-color:green;color:white}#gdpr--cookie-policy-root .gdpr--cookie-close{display:block;position:absolute;top:10px;right:10px;color:white;cursor:pointer}#gdpr--cookie-policy-root .gdpr--cookie-close i{font-size:20px;transition:all .1s ease-in;-webkit-transform:translate(0);transform:translate(0)}#gdpr--cookie-policy-root .gdpr--cookie-close:hover i{-webkit-transform:translateZ(0) scale(1.2);transform:translateZ(0) scale(1.2)}@media (min-width:768px){#gdpr--cookie-policy-root{padding:20px 30px}#gdpr--cookie-policy-root .gdpr--cookie-policy-content{flex-direction:row;justify-content:flex-start}#gdpr--cookie-policy-root .gdpr--cookie-policy-content>div{margin-bottom:0;margin-right:15px}#gdpr--cookie-policy-root .gdpr--cookie-policy-content .gdpr--cookie-policy-actions{max-width:250px;display:flex;margin-left:20px;justify-content:space-between}#gdpr--cookie-policy-root .gdpr--cookie-policy-content .gdpr--cookie-policy-actions button{margin:0}#gdpr--cookie-policy-root .gdpr--cookie-info-link{margin-right:0!important}}</style>
        <div class="gdpr--cookie-policy-content">
            <div>This website uses cookies and other tracking technologies to assist with functionality, to analyze your use of our sites and advertising, to provide customized content and advertisements and assist with our marketing efforts, and to provide content from third parties with whom we have a relationship. Please view the <a href="/privacy" target="_blank">Privacy Policy</a> for our Cookie Policy.
                By continuing to browse or by clicking “Accept All Cookies,” you agree to the storing of first- and third-party cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
            </div>
            <div class="gdpr--cookie-policy-actions">
                <button class="gdpr--cookie-accept btn" type="button">Allow Cookies </button>
                <button class="gdpr--cookie-decline btn" type="button">Disable Cookies </button><a class="gdpr--cookie-close" aria-label="close banner" href="href"><i class="fa fa-times-circle"></i></a>
            </div>
            <!--<script>"use strict";var _createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,t,i){return t&&e(o.prototype,t),i&&e(o,i),o}}();function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var CookieBanner=function(){function e(){_classCallCheck(this,e),this.root=document.getElementById("gdpr--cookie-policy-root"),this.closeBtn=document.querySelector(".gdpr--cookie-close"),this.allowBtn=document.querySelector(".gdpr--cookie-accept"),this.declineBtn=document.querySelector(".gdpr--cookie-decline"),this.getCookie("cookies_allowed")||this.root.classList.remove("hidden","gone"),this.closeBanner=this.closeBanner.bind(this),this.allowCookies=this.allowCookies.bind(this),this.disableCookies=this.disableCookies.bind(this),this.closeBtn.addEventListener("click",this.closeBanner,!1),this.allowBtn.addEventListener("click",this.allowCookies,!1),this.declineBtn.addEventListener("click",this.disableCookies,!1)}return _createClass(e,[{key:"closeBanner",value:function(e){var o=this;e&&e.preventDefault(),this.root.classList.add("hidden"),setTimeout(function(){o.root.classList.add("gone")},800),setTimeout(function(){o.root.classList.remove("gone")},2e3),setTimeout(function(){o.root.classList.remove("hidden")},2100)}},{key:"disableCookies",value:function(){window.ga&&ga("set","anonymizeIp",!0),this.setCookie("cookies_allowed",!1,30),this.closeBanner()}},{key:"allowCookies",value:function(){this.setCookie("cookies_allowed",!0,30),this.closeBanner()}},{key:"setCookie",value:function(e,o,t){var i=new Date;i.setTime(i.getTime()+24*t*60*60*1e3);var n="expires="+i.toUTCString();document.cookie=e+"="+o+";"+n+";path=/"}},{key:"getCookie",value:function(e){for(var o=e+"=",t=decodeURIComponent(document.cookie).split(";"),i=0;i<t.length;i++){for(var n=t[i];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(o))return console.log(n),n.substring(o.length,n.length)}return""}}]),e}(),cb=new CookieBanner;</script>-->
        </div>
    </div>
</div>
</div>
`;
let nomUser = "";
const HomePage = async () => {
    setLayout("Home");

    let page = document.querySelector("#page");
    page.innerHTML = homePage;
    let btnChatPage = document.querySelector("#btnChatPage");
    btnChatPage.addEventListener("click", onRegister);
    cookieCall();
    //chatPageAdd();
}
var _createClass = function () {
    function e(e, o) {
        for (var t = 0; t < o.length; t++) {
            var i = o[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    setLayout("Home");
    let page = document.querySelector("#page");
    page.innerHTML = homePage;
    //chatPageAdd();
    cookieCall();
};
/*
const chatPageAdd = () => {
    let chatpage = document.querySelector("#chatPage");
    chatpage.onclick = ChatPage;
    let nomUser = document.getElementById("name").value;
    console.log(nomUser);
}*/
const cookieCall = () => {
    var _createClass = function () {
        function e(e, o) {
            for (var t = 0; t < o.length; t++) {
                var i = o[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (o, t, i) {
            return t && e(o.prototype, t), i && e(o, i), o
        }
    }();

    function _classCallCheck(e, o) {
        if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
    }

    var CookieBanner = function () {
        function e() {
            _classCallCheck(this, e), this.root = document.getElementById("gdpr--cookie-policy-root"), this.closeBtn = document.querySelector(".gdpr--cookie-close"), this.allowBtn = document.querySelector(".gdpr--cookie-accept"), this.declineBtn = document.querySelector(".gdpr--cookie-decline"), this.getCookie("cookies_allowed") || this.root.classList.remove("hidden", "gone"), this.closeBanner = this.closeBanner.bind(this), this.allowCookies = this.allowCookies.bind(this), this.disableCookies = this.disableCookies.bind(this), this.closeBtn.addEventListener("click", this.closeBanner, !1), this.allowBtn.addEventListener("click", this.allowCookies, !1), this.declineBtn.addEventListener("click", this.disableCookies, !1)
        }

        return _createClass(e, [{
            key: "closeBanner", value: function (e) {
                var o = this;
                e && e.preventDefault(), this.root.classList.add("hidden"), setTimeout(function () {
                    o.root.classList.add("gone")
                }, 800), setTimeout(function () {
                    o.root.classList.remove("gone")
                }, 2e3), setTimeout(function () {
                    o.root.classList.remove("hidden")
                }, 2100)
            }
        }, {
            key: "disableCookies", value: function () {
                window.ga && ga("set", "anonymizeIp", !0), this.setCookie("cookies_allowed", !1, 30), this.closeBanner()
            }
        }, {
            key: "allowCookies", value: function () {
                this.setCookie("cookies_allowed", !0, 30), this.closeBanner()
            }
        }, {
            key: "setCookie", value: function (e, o, t) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
                var n = "expires=" + i.toUTCString();
                document.cookie = e + "=" + o + ";" + n + ";path=/"
            }
        }, {
            key: "getCookie", value: function (e) {
                for (var o = e + "=", t = decodeURIComponent(document.cookie).split(";"), i = 0; i < t.length; i++) {
                    for (var n = t[i]; " " == n.charAt(0);) n = n.substring(1);
                    if (0 == n.indexOf(o)) return console.log(n), n.substring(o.length, n.length)
                }
                return ""
            }
        }]), e
    }(), cb = new CookieBanner;
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

const onRegister = (e) => {
    e.preventDefault();
    let user = {
        username: document.getElementById("name").value,
    };
    console.log("User : "+user.username);
    fetch("/api/users/chat", {
        method: "POST",
        body: JSON.stringify(user), // body data type must match "Content-Type" header
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) throw new Error("Error code : " + response.status + " : " + response.statusText);
            return response.json();
        })
        .then((data) => onUserRegistration(data))
        .catch((err) => onError(err));
};

const onUserRegistration = (userData) => {
    console.log("onUserRegistration", userData);
    const userReg = {...userData, isAutenticated:true};
    setUserSessionData(userReg);
    // re-render the navbar for the authenticated user                          A VERIF...
    //Navbar();
    RedirectUrl("/chatPage");
};

const onError = (err) => {
    let messageBoard = document.querySelector("#messageBoard");
    let errorMessage = "";
    if (err.message.includes("409")) errorMessage = "This user is already registered.";
    else errorMessage = err.message;
    console.log(errorMessage);
};

export default HomePage;