const {model, Schema} = require("mongoose");

const BioEquivalentesSchema = Schema({
    BioEquivalenciaCategoria:{
        type:String,
        required: true 
     }
    , 
    NombreMedicamento:{
        type:String,
        required: true 
     },
     NombreFantasia:{
        type:String,
        required: true
     }
})

module.exports = model("Bioequivalente",BioEquivalentesSchema,"Bioequivalentes") //modelo define un modelo constructor de esquema de base de datos, al inicio se coloca el nickname del modelo con el cual sera invocado, en segundo se coloca en si el esquema construido y la tercera es la coleccion a usar.

