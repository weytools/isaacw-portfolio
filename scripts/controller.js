//import {  } from "./animations.js";
import getProjects from "./projects.js";
import * as ani from "./animations.js";

document.addEventListener("DOMContentLoaded", function(){
    history.scrollRestoration = 'manual';
    window.scroll(0,0);
    ani.setupListeners();
    ani.introAnimation();
    getProjects();
});