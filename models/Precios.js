const {model, Schema} = require("mongoose");

const PreciosSchema = Schema({
    NombreMedicamento:{
       type:String,
       required: true 
    }, 
    NombreFantasia:{
        type:String,
        required: true 
     },
    Precio:{
        type:Number,
        required: true
     },
     Laboratorio:{
        type:String,
        required:true
     },
    PrecioPorPorcion:{
        type:Number,
        required:true
    }
})

module.exports = model("Precio",PreciosSchema,"Precios") //modelo define un modelo constructor de esquema de base de datos, al inicio se coloca el nickname del modelo con el cual sera invocado, en segundo se coloca en si el esquema construido y la tercera es la coleccion a usar.

