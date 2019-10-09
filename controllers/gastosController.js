exports.formularioNuevoGasto = (req, res) => {
    res.render("nuevoGasto", {
      nombrePagina: "Nuevo gasto",
      tagline: "Llena el formulario y publica un nuevo gasto"
    });
  };