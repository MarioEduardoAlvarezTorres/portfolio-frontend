const url = "https://portfolio-l2h9.onrender.com/api/projects";
let cards = "";
let toolsFrontend = ["HTML-CSS", "HTML-CSS-JS", "REACT", "ANGULAR"];
document.getElementById('carga').style.display = 'flex';
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let projects = data;
        toolsFrontend.forEach((tool) => {
            cards = "";
            let titleCards = document.getElementById("cards-" + tool.toLowerCase()).innerHTML;
            projects
                .filter((project) => project.tag === tool)
                .forEach((project) => {
                    cards += createProject(
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
            document.getElementById(id).innerHTML = titleCards + cards || "";
        });
        document.getElementById('carga').style.display = 'none';
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
          <div class="card-project" class="${tag}"> 
            <div class="image">
                <img src='${images[0]}' alt='image${name}'/>
            </div> `;

    card =
        card +
        `
            <div class="information">
                <h2>${name}</h2>
                <p> ${description || ""}</p>
                <p>${developerToolsFrontend || ""}</p>
                <p>${developerToolsBackend || ""}</p>`;
    if (links !== null) {
        if (links[0] != "" && links[0] !== undefined)
            card = card + `<a href = "${links[0]}"> GitHub </a>`;
        if (links[1] != "" && links[1] !== undefined)
            card = card + `<a href = "${links[1]}"> Deploy </a>`;
        if (links[2] != "" && links[2] !== undefined)
            card = card + `<a href = "${links[2]}"> YouTube </a>`;
    }
    card =
        card +
        `<p><strong>Tag:"${tag}"</strong></p></div> 
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