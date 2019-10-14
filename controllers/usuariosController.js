exports.formularioNuevoUsuario = (req, res) => {
    res.render("nuevoUsuario", {
      nombrePagina: "Nuevo Usuario",
    });
  };