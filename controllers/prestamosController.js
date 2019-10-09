exports.formularioNuevoPrestamo = (req, res) => {
    res.render("nuevoPrestamo", {
      nombrePagina: "Nuevo préstamo",
      tagline: "Llena el formulario y publica un nuevo préstamo"
    });
  };