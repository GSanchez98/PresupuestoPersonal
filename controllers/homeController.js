exports.mostrarIngresos = (req, res) => {
    res.render("home", {
      nombrePagina: "Presupuesto Personal o Familiar",
      tagline: "Maneja tu dinero de una manera eficiente y eficaz",
      barra: true,
      boton: true
    });
  };
  