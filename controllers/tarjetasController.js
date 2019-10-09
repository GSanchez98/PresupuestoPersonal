exports.formularioNuevaTarjeta = (req, res) => {
    res.render("nuevaTarjeta", {
      nombrePagina: "Nueva tarjeta de crédito",
      tagline: "Llena el formulario y agrega una nueva tarjeta de crédito"
    });
  };