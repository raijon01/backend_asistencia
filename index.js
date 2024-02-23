/* CTRL+D para seleccionar varios a la vez
CTRL+U DESAHCER ULTIMA SELECCION.
SHIFT + ALT + A PARA COMENTAR TODO
CTRL + ALT + FLECHA PARA AGREGAR O DESAGREGAR FLECHAS */

const {conexion}=require("./dataBase/Conexion")



const express=require("express")
const cors=require("cors")

console.log("primer controlador");
conexion()

const app=express()

const puerto= process.env.PORT || 3900

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))

const rutaProducto=require("./rutas/Productos")

app.use("/api",rutaProducto)

app.listen(puerto,()=>{
    console.log("hola hola, este es el servidor"+ puerto);
})
