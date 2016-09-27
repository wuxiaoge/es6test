import Player from "./play"
import "./l.less"

let user = new Player("aaaa", 11);

var _div = document.createElement("div");
_div.innerHTML = user.say();
document.querySelector("main").appendChild(_div);

