const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

// CONFIGURACION DE MONGOOSE
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", error => {
  console.log(error);
});

// IMPORTANDO LOS MODELOS
require("../models/Ingresos");
