//CARGAMOS LOS MODULOS
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const ingresosController = require("../controllers/ingresosController");
const gastosController = require("../controllers/gastosController");
const ahorrosController = require("../controllers/ahorrosController");
const prestamosController = require("../controllers/prestamosController");
const tarjetasController = require("../controllers/tarjetasController");

module.exports = () => {
  router.get("/", homeController.mostrarIngresos);
  router.get("/ingreso/nuevoIngreso", ingresosController.formularioNuevoIngreso);
  router.get("/gasto/nuevoGasto", gastosController.formularioNuevoGasto);
  router.get("/ahorro/nuevoAhorro", ahorrosController.formularioNuevoAhorro);
  router.get("/prestamo/nuevoPrestamo", prestamosController.formularioNuevoPrestamo);
  router.get("/tarjeta/nuevaTarjeta", tarjetasController.formularioNuevaTarjeta);


  return router;
};
