//CARGAMOS LOS MODULOS
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const ingresosController = require("../controllers/ingresosController");


module.exports = () => {
  router.get("/", homeController.mostrarIngresos);
  router.get("/ingreso/nuevoIngreso", ingresosController.formularioNuevoIngreso);


  return router;
};
