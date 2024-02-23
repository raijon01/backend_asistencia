const {model, Schema, default: mongoose} = require("mongoose");

const VentasSchema = Schema({
    Cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true 
    },
    NombreMedicamento:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Precio',
        required: true
    },
    Unidades:{
        type:Number,
        required:true
    },
    MontoVenta:{
        type:Number,
        required:true
    }
})

module.exports = model("Venta",VentasSchema,"Venta") //modelo define un modelo constructor de esquema de base de datos, al inicio se coloca el nickname del modelo con el cual sera invocado, en segundo se coloca en si el esquema construido y la tercera es la coleccion a usar.

