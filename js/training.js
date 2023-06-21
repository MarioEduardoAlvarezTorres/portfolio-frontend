const urlTraining = "https://portfolio-l2h9.onrender.com/api/academic-training";
let trainingcard = "";
fetch(urlTraining)
    .then((res) => res.json())
    .then((data) => {
        let training = data;
        training.forEach((element) => {
            trainingcard += createTrainig(
                element.title,
                element.date,
                element.description
            );
        });
        document.getElementById("olTimeline").innerHTML =
            trainingcard || "";
    });

function createTrainig(title, date, description) {
    let training = `
        <li>
            <div>
                <h3><strong>${title}</strong></h3><br>
                <time>${date}</time>
                ${description}
            </div>
        </li>`;
    return training;
}