//import {  } from "./animations.js";
import getProjects from "./projects.js";
import * as ani from "./animations.js";

document.addEventListener("DOMContentLoaded", function(){
    window.scroll(0,0);
    ani.setupListeners();
    ani.introAnimation();
    getProjects();
});