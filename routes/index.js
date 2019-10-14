//CARGAMOS LOS MODULOS
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const ingresosController = require("../controllers/ingresosController");
const gastosController = require("../controllers/gastosController");
const ahorrosController = require("../controllers/ahorrosController");
const prestamosController = require("../controllers/prestamosController");
const tarjetasController = require("../controllers/tarjetasController");
const usuariosController = require("../controllers/usuariosController");

module.exports = () => {
  router.get("/", homeController.mostrarIngresos);
  router.get("/ingreso/nuevoIngreso", ingresosController.formularioNuevoIngreso);
  router.get("/gasto/nuevoGasto", gastosController.formularioNuevoGasto);
  router.get("/ahorro/nuevoAhorro", ahorrosController.formularioNuevoAhorro);
  router.get("/prestamo/nuevoPrestamo", prestamosController.formularioNuevoPrestamo);
  router.get("/tarjeta/nuevaTarjeta", tarjetasController.formularioNuevaTarjeta);
  router.get("/usuario/nuevoUsuario", usuariosController.formularioNuevoUsuario);

  return router;
};
