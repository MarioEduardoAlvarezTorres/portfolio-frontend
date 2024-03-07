$(document).ready(() => {
  ocultarModal();
});

const openModal = () => {
  const projectSeleccionado = $(event.currentTarget)
    .closest(".project")
    .find("p.id")
    .text();

  $.ajax({
    url: "/data/frontend-backend.json",
    type: "GET",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: (data) => {
      const objetoEncontrado = data.find(
        (project) => project.id === projectSeleccionado
      );
      // DATOS
      $(".modal-container #img-modal").attr("src", objetoEncontrado.images[0]);
      $(".modal-container #title").text(objetoEncontrado.name);
      $(".modal-container #description").text(objetoEncontrado.description);
      const $contentLinks = $("<div>").addClass("links-container");
      $.each(objetoEncontrado.links, (index, link) => {
        const $links = $("<a>")
          .addClass("link")
          .attr("href", `${link}`)
          .attr("target", "_blank")
          .html(svgArray[index].svg);
        if (link) $contentLinks.append($links);
      });

      $(".modal-right .links-container").append($contentLinks);

      mostrarModal();
    },
    error: (xhr, status, error) => {
      console.error("Error en la solicitud AJAX:", status, error);
    },
  });
};

const mostrarModal = () => {
  $(".modal-container").fadeIn().show();
};

const ocultarModal = () => {
  $(".modal-container").fadeOut().hide();
  $(".modal-container #img-modal").attr("src", "");
  $(".modal-container #title").text("");
  $(".modal-container #description").text("");
  $(".modal-right .links-container").empty();
};

$("#ocultarModal").click(() => {
  ocultarModal();
});
