const Url = "https://portfolio-l2h9.onrender.com/api/projects";
let cards = "";
fetch(Url)
    .then((res) => res.json())
    .then((data) => {
        let projects = data;
        projects.forEach((project) => {
            cards += createProject(
                project.name,
                project.description,
                project.developerToolsFrontend,
                project.developerToolsBackend,
                project.links,
                project.tag,
                project.images,
            );
        });
        console.log(cards);
        document.getElementsByClassName('container-project')[0].innerHTML = cards;
    });

function createProject(name, description, developerToolsFrontend, developerToolsBackend, links, tag, images) {
    let card = `
          <div class="card-project" class="${tag}">`
    images.forEach(image => {
        card = card + `<img src='${image}' alt='image${name}'/>`
    })

    card = card + `<h2>${name}</h2><p> ${description || '' }</p><p>${ developerToolsFrontend || '' }</p><p>${developerToolsBackend || '' }</p>`
    if (links !== null) {
        if (links[0] != '' && links[0] !== undefined)
            card = card + `<a href = "${links[0]}"> GitHub </a>`
        if (links[1] != '' && links[1] !== undefined)
            card = card + `<a href = "${links[1]}"> Deploy </a>`
        if (links[2] != '' && links[2] !== undefined)
            card = card + `<a href = "${links[2]}"> YouTube </a>`
    }
    card = card + `<p><strong>Tag:"${tag}"</strong></p></div>`
    return card;
}