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
        projectEl.classList.add("card", "shadow", "mw-lg-45", "m-45", "reveal", "col-10","col-md-8", "col-lg-4");
        // source button logic
        let hasSource = project.buttons[1].isSource
        var sourceBtn = '';
        if (hasSource) {
            sourceBtn = `
            <a href="${project.buttons[1].ref}" target="_blank" class="btn btn-pasgreen text-pasgreen-dark rounded-circle source-button shadow-sm">
                <i class="fa-code fas" aria-hidden="true"></i>
            </a>
        `
        } else {
            sourceBtn = `
            <a href="${project.buttons[1].ref}" target="_blank" class="btn ${project.buttons[1].isDisabled ? "btn-outline-secondary disabled" : "btn-pasgreen"} text-pasgreen-dark btn-sm btn-sm-grow lh-2 btn-block shadow-sm">
                ${project.buttons[1].label}
            </a>
            `
        }  
        let output = `
            <img src="${project.image}" class="card-img-top border-bottom" alt="${project.imageAlt}">
            <div class="card-body d-flex flex-column position-relative">
            ${hasSource?sourceBtn:``}
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
                    <a class="btn btn-pasblue text-pasblue-dark btn-sm-grow btn-block shadow-sm" ${project.buttons[0].isModal? `data-toggle="modal" data-target="${project.buttons[0].modalTarget}"`: `href="${project.buttons[0].ref}" target="_blank"`}>
                        ${project.buttons[0].label}
                    </a>
                    <span class="px-1"></span>
                    ${hasSource?``:sourceBtn}
                </div>
            </div>
            <div class="card-footer pill-container">`
            var footerItems = project.footer.split(', ');
            footerItems.forEach(e=>{output+='<span class="badge footer-pill">'+e+'</span>'})
            output += '</div>'
            
        projectEl.innerHTML = output;
        projectContainer.appendChild(projectEl);
    }
}

export default getProjects;