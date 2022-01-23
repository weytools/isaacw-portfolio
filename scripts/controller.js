//import {  } from "./animations.js";
import getProjects from "./projects.js";
import * as ani from "./animations.js";

document.addEventListener("DOMContentLoaded", function(){
    ani.introAnimation();
    getProjects();

});