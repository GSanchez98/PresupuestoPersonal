exports.formularioNuevoAhorro = (req, res) => {
    res.render("nuevoAhorro", {
      nombrePagina: "Nuevo Ahorro",
      tagline: "Llena el formulario y publica un nuevo ahorro"
    });
  };