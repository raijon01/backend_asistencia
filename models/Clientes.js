const {model, Schema} = require("mongoose");

const ClientesSchema = Schema({
    Nombre:{
        type:String,
        required: true 
    }, 
    Correo:{
        type:String,
        required: true 
     },
    Contraseña:{
        type:String,
        required: true
     }
})

module.exports = model("Cliente",ClientesSchema,"Clientes") //modelo define un modelo constructor de esquema de base de datos, al inicio se coloca el nickname del modelo con el cual sera invocado, en segundo se coloca en si el esquema construido y la tercera es la coleccion a usar.

