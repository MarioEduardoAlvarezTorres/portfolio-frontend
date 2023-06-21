const urlTraining = "https://portfolio-l2h9.onrender.com/api/academic-training";
let trainingcard = "";
fetch(urlTraining)
  .then((res) => res.json())
  .then((data) => {
    let training = data;
    console.log(data);
    training.forEach((element) => {
      trainingcard += createTrainig(
        element.title,
        element.date,
        element.description
      );
    });
    console.log(trainingcard);
    document.getElementsByClassName("olTimeline")[0].innerHTML =
      trainingcard +
        `<div class="arrows">
        <button class="arrow arrow__prev disabled" disabled>
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg"
      alt="prev timeline arrow"
    />
  </button>
        <button class="arrow arrow__next">
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg"
      alt="next timeline arrow"
    />
  </button>
    </div>` || "";
  });

function createTrainig(title, date, description) {
  let training = `
        <li>
            <div>
                <time>${date}</time>
                <strong>${title}</strong><br>
                ${description}
            </div>
        </li>`;
  return training;
}
