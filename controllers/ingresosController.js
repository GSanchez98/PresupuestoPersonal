exports.formularioNuevoIngreso = (req, res) => {
    res.render("nuevoIngreso", {
      nombrePagina: "Nuevo Ingreso",
      tagline: "Llena el formulario y publica un nuevo ingreso"
    });
  };