const urlback = "https://portfolio-l2h9.onrender.com/api/projects";
let cardsback = "";
let toolsBackend = ["EXPRESS", "NESTJS"];
document.getElementById("carga").style.display = "flex";
fetch(urlback)
    .then((res) => res.json())
    .then((data) => {
        let projects = data;
        toolsBackend.forEach((tool) => {
            cardsback = "";
            let titleCards = document.getElementById(
                "cards-" + tool.toLowerCase()
            ).innerHTML;
            projects
                .filter((project) => project.tag === tool)
                .forEach((project) => {
                    cardsback += createProject(
                        project.name,
                        project.description,
                        project.developerToolsFrontend,
                        project.developerToolsBackend,
                        project.links,
                        project.tag,
                        project.images
                    );
                });

            let id = "cards-" + tool.toLowerCase();
            document.getElementById(id).innerHTML = titleCards + cardsback || "";
        });
        document.getElementById("carga").style.display = "none";
    });

function createProject(
    name,
    description,
    developerToolsFrontend,
    developerToolsBackend,
    links,
    tag,
    images
) {
    let card = `
          <div class="card-project"> 
            <div class="image">
                <img src='${images[0] || ""}' alt='image${name}'/>
            </div> `;

    card =
        card +
        `
            <div class="information">
                <h2>${name}</h2>
                <p>${description || ""}</p>
                <a href="#openModal${name.trim()}">Ver mas</a>
                <div class="links">`;
    if (links !== null) {
        if (links[0] != "" && links[0] !== undefined)
            card =
            card +
            `<a href = "${links[0]}"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg> </a>`;
        if (links[1] != "" && links[1] !== undefined)
            card =
            card +
            `<a href = "${links[1]}"> <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="#000000" stroke-width="2" d="M23,1 C23,1 16.471872,0.541707069 14,3 C13.9767216,3.03685748 10,7 10,7 L5,8 L2,10 L10,14 L14,22 L16,19 L17,14 C17,14 20.9631426,10.0232786 21,10 C23.4582929,7.5281282 23,1 23,1 Z M17,8 C16.4475,8 16,7.5525 16,7 C16,6.4475 16.4475,6 17,6 C17.5525,6 18,6.4475 18,7 C18,7.5525 17.5525,8 17,8 Z M7,17 C6,16 4,16 3,17 C2,18 2,22 2,22 C2,22 6,22 7,21 C8,20 8,18 7,17 Z"/>
          </svg> </a>`;
        if (links[2] != "" && links[2] !== undefined)
            card =
            card +
            `<a href = "${links[2]}"> <svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="red"></path> </svg> </a>`;
    }
    card =
        card +
        `<p><strong>Tag:"${tag}"</strong></p></div></div> 
            </div>
            <div id="openModal${name.trim()}" class="modalDialog">
                <div class="container-modal">
                    <div id="image">
                        <img src='${images[0] || ""}' alt="">
                    </div>
                    <div id="information">
                        <a href="#close" title="Close" class="close">X</a>
                        <h2>${name}</h2>
                        <p>${description}</p>
                        <p><strong>Herramientas utilizadas:</strong> ${developerToolsFrontend || developerToolsBackend}</p>
                        <p><strong>Tag:</strong>${tag}</p>
                        <p>${links}</p>  
                    </div>
                </div>
            </div>`;
    return card;
}