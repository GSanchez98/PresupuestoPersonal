//CARGAMOS LOS MODULOS INSTALADOS
const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./routes/index");
const path = require("path");
const mongoose = require("mongoose");
require("./config/db");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// HABILITANDO EL ARCHIVO DE LAS VARIABLES DE ENTORNO
require("dotenv").config({ path: "variables.env" });


const app = express();

// HABILITAMOS HANDLEBARS
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "layout"
  })
);

app.set("view engine", "handlebars");

// DEFINIR LA RUTA PARA LOS ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, "public")));


app.use("/", router());

app.listen(8800);
