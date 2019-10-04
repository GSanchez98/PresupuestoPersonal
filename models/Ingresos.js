const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slug");
const shortid = require("shortid");

//DEFINICION DEL ESQUEMA
const ingresoSchema = new mongoose.Schema({
    descripcion: {
      type: String,
      required: "La descripción del ingreso es necesaria",
      trim: true
    },
    montoPresupuestado: {
      type: String,
      default: 0.00,
      trim: true
    },
    montoReal: {
      type: String,
      default: 0.00,
      trim: true
    },
    url: {
      type: String,
      lowercase: true
    }
  });
  // MIDDLEWARE PARA GENERAR LA URL
  ingresoSchema.pre("save", function(next) {
    // Crear la URL
    const url = slug(this.descripcion);
    this.url = `${url}-${shortid.generate()}`;
  
    next();
  });
  
  module.exports = mongoose.model("Ingreso", ingresoSchema);
  