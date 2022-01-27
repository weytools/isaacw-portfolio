import * as ani from "./animations.js";
async function getProjects() {
    const request = new Request('./data/projects.json');
  
    const response = await fetch(request);
    const projectList = await response.json();
  
    populateProjects(projectList);
    ani.setupObservers();
}

function populateProjects(projects){
    const projectContainer = document.querySelector('#project-container');
    for (const project of projects) {
        if (project.isDisabled) continue;
        let projectEl = document.createElement('div');
        // <div class="card shadow mw-lg-45 m-3">
        projectEl.classList.add("card", "shadow", "mw-lg-45", "m-3", "reveal");
        let output = `
            <div class="card-body d-flex flex-column">
                <img src="${project.image}" class="card-img-top border border-secondary rounded mb-3"
                    alt="${project.imageAlt}">
                <h5 class="card-title">
                    ${project.title}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted mb-3">
                    ${project.subtitle}
                </h6>
                <p class="card-text">
                    ${project.description}
                </p>
                <div class="d-flex justify-content-start mt-auto pt-2">
                    <a class="btn btn-pasblue btn-sm btn-sm-grow" ${project.buttons[0].isModal? `data-toggle="modal" data-target="${project.buttons[0].modalTarget}"`: `href="${project.buttons[0].ref}" target="_blank"`}>
                        ${project.buttons[0].label}
                    </a>
                    <span class="px-1"></span>
                    <a href="${project.buttons[1].ref}" target="_blank"
                        class="btn ${project.buttons[1].isDisabled ? "btn-outline-secondary disabled" : "btn-pasyellow"} btn-sm btn-sm-grow">
                        ${project.buttons[1].label}
                    </a>
                </div>
            </div>
            <div class="card-footer">`
            var footerItems = project.footer.split(', ');
            footerItems.forEach(e=>{output+='<em class="footer-pill small text-monospace">'+e+'</em>'})
            output += '</div>'
            
        projectEl.innerHTML = output;
        projectContainer.appendChild(projectEl);
    }
}

export default getProjects;