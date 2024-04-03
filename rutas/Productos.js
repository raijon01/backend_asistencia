//npm run dev


const express= require("express");
const UsuarioControlador = require("../controllers/Usuario");
const router=express.Router();
const check=require("../middlewares/Auth")




//ruta util
router.post("/crearP", UsuarioControlador.crearP)
router.post("/crearB", UsuarioControlador.crearB)
router.post("/crearC", UsuarioControlador.crearC)
router.post("/crearV", UsuarioControlador.crearV)
router.post("/prueba", UsuarioControlador.prueba)
router.get("/pedirventa",check.auth,UsuarioControlador.pedirVentas)
router.post("/login",UsuarioControlador.login)



//router.get("/articulos/:ultimos?",UsuarioControlador.listar) 
/*a traves de la ruta se envian mensajes, en este caso, se envian de forma opcional, no obligatorioa
a traves del /:ultimos?. el signo "?" hace al parametro opcional, sin este signo es obligacion pasar el parametro.
este parametro se envia a traves de la consulta y se obtiene con el get. */

/* router.get("/articulo/:id",UsuarioControlador.uno) 
router.delete("/articulo/:id",UsuarioControlador.borrar) 
router.put("/articulo/:id",UsuarioControlador.editar) 
router.get("/imagen/:fichero",UsuarioControlador.imagen) 
router.get("/buscar/:busqueda",UsuarioControlador.buscador)
wena */




module.exports = router;