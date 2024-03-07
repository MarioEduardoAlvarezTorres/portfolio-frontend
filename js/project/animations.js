// BARRA DE PROGRESO
let percentageKnowledge = {
  FrontEnd: 70,
  BackEnd: 80,
  Despliegue: 40,
  BaseDatos: 70,
};

for (let percentage in percentageKnowledge) {
  if (percentageKnowledge.hasOwnProperty(percentage)) {
    let progressBar = document.getElementById(percentage);

    progressBar.style.setProperty(
      "--percentage",
      percentageKnowledge[percentage] + "%"
    );

    progressBar.querySelector(".text").textContent =
      percentageKnowledge[percentage] + "%";
  }
}

const applyAnimation = (entries, className) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(className);
    } else if (className === "animate") {
      entry.target.classList.remove(className);
    }
  });
};

const observeElements = (selector, className) => {
  let elementsList = document.querySelectorAll(selector);

  elementsList.forEach((element) => {
    let observer = new IntersectionObserver(
      (entries) => applyAnimation(entries, className),
      {}
    );
    observer.observe(element);
  });
};

observeElements(
  ".percentage-container .progress-container .progress-bar",
  "animate"
);
observeElements(
  ".hero-container #information, .hero-container #banner, .skill-card",
  "slow-in"
);

observeElements(".training-card", "timeLine");

observeElements(".project-container .container-tool", "scrollShow");
