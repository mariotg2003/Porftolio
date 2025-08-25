// CODE CERTIFICATES

function leerJson(ruta) {
  return fetch(ruta)
    .then((response) => {
      if (!response.ok) {
        throw new Error("JSON not found");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

function mostrarDatosCursos(datos) {
  var divCursos = document.getElementById("cursos");
  var cursos = datos.cursos;

  cursos.forEach((curso) => {
    var card = document.createElement("div");
    card.className = "card cert-card";
    card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${curso.title}</h5>
            <p class="card-text">Issued by: <strong>${curso.description}</strong> </br> ${curso.duration}</p>
            <a href="${curso.link}" class="btn btn-primary">View Certification</a>
          </div>
    `;
    divCursos.appendChild(card);
  });
}

function cargarDatosCursos() {
  leerJson("data/cursos.json")
    .then((datos) => {
      mostrarDatosCursos(datos);
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
}

cargarDatosCursos();

//FORM GMAIL
imagen = document.getElementById("profile-picture");

imagen.addEventListener("click", function () {
  window.open(
    "form.html",
    "_blank",
    "width=800,height=560",
    "resizable=no",
    "scrollbars=no",
    "toolbar=no",
    "location=no",
    "status=no"
  );
});

// Projects Section
function mostrarDatosProyecto(datos) {
  var divProyectos = document.getElementById("proyectos");
  console.log(datos);
  var proyecto = datos.proyectos;

  console.log(proyecto);
  proyecto.forEach((curso) => {
    var card = document.createElement("div");
    card.className = "card cert-card";
    card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${curso.title}</h5>
            <p class="card-text">Issued by: <strong>${curso.description}</strong></p>
            <a href="${curso.link}" class="btn btn-primary">View Certification</a>
          </div>
    `;
    divProyectos.appendChild(card);
  });
}

function cargarDatosProyectoss() {
  leerJson("data/proyectos.json")
    .then((datos) => {
      mostrarDatosProyecto(datos);
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
}

cargarDatosProyectoss();
