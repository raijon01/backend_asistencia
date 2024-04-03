const fs = require("fs")
const path=require("path")
const validator=require("validator")
const Precios=require("../models/Precios")
const Bioequivalentes=require("../models/Bioequivalentes")
const Clientes=require("../models/Clientes")
const Ventas=require("../models/Ventas")
const jwt=require("../services/jwt")

//holi
const prueba=(req,res)=>{
    return res.json(
      {
        message:"hola"
    }  
    )
}

const crearP = async(req,res) =>{
    
    console.log("holi holi");

    //recoger paramtros por post a guardar
    let parametros=req.body;

    const precio=new Precios(parametros); //automaticamente asigna cada informacion con cada parte del articulo definido en el modelo. Si uno envia titulo, se envia a la parte del esquema titulo.

    
    //guardar el articulo en la base de datos
    try{
        precioGuardado=await precio.save()
        /* (precioGuardado ? 
        return res.json({message:"hola"}) 
        : return res.json({message:"naaa"})) */
        if(!precioGuardado){return res.json({status:"error",mensaje:"no se ha guardado el precio"})}
        return res.status(200).json({status:"success",precio:precioGuardado,mensaje:"precio guardado"})

    }
    catch {
        return res.status(500).json({
            status:"error",
            mensaje:"error en el servidor"
        })  
    };
    
    
}
const crearB = async(req,res) =>{
    
    //recoger paramtros por post a guardar
    let parametros=req.body;

    const bioequivalente=new Bioequivalentes(parametros); //automaticamente asigna cada informacion con cada parte del articulo definido en el modelo. Si uno envia titulo, se envia a la parte del esquema titulo.

    //guardar el articulo en la base de datos
    try{
        bioequivalenteGuardado=await bioequivalente.save()
        if(!bioequivalenteGuardado){return res.json({mensaje:"no guardado"})}
        return res.status(200).json({mensaje:"guardado"})

    }
    catch {
        return res.status(500).json({
            status:"error",
            mensaje:"error en el servidor"
        })  
    };
}
const crearC = async(req,res) =>{
    
    //recoger paramtros por post a guardar
    let parametros=req.body;

    const cliente=new Clientes(parametros); //automaticamente asigna cada informacion con cada parte del articulo definido en el modelo. Si uno envia titulo, se envia a la parte del esquema titulo.

    //guardar el articulo en la base de datos
    try{
        clienteGuardado=await cliente.save()

        if(!clienteGuardado){return res.json({mensaje:"no guardado"})}
        return res.status(200).json({mensaje:"guardado",cliente:clienteGuardado})
    }
    catch {
        return res.status(500).json({
            status:"error",
            mensaje:"error en el servidor"
        })  
    };
}
const crearV = async(req,res) =>{
    
    //recoger paramtros por post a guardar
    let parametros=req.body;

    const venta=new Ventas(parametros); //automaticamente asigna cada informacion con cada parte del articulo definido en el modelo. Si uno envia titulo, se envia a la parte del esquema titulo.

    //guardar el articulo en la base de datos
    try{
        ventaGuardado=await venta.save()

        if(!ventaGuardado){return res.json({mensaje:"no guardado"})}
        return res.status(200).json({mensaje:"guardado"})
    }
    catch {
        return res.status(500).json({
            status:"error",
            mensaje:"error en el servidor"
        })  
    };
}
const pedirVentas=async(req,res)=>{

    const listaVentasSinPopulate= await Ventas.find()
    //const listaVentasConPopulate= await Ventas.find().populate('Cliente','Nombre')
    const listaVentasConPopulate= await Ventas.find().populate({path:'Cliente',select:'Nombre',select:'-__v'})

    try{
        return (
            res.json({
                metodo1:"sin populate",
                message1:listaVentasSinPopulate,
                metodo2:"con populate",
                message2:listaVentasConPopulate,
            })
        )
    }catch{
        return res.json("sin respuesta")
    }

}
const login=async(req,res)=>{
    let validado=false
    let params=req.body
    //const usuario=await Clientes.findOne({email:params.email}).select({"password":0})
    const usuario=await Clientes.findOne({email:params.email})
    if (usuario.Contraseña==params.Contraseña){
        validado=true
    }
    /* (usuario.Contraseña==params.Contraseña ? validado=true : validado=false) */
    if (validado==true) {
        let token=jwt.createToken(usuario)
        return res.json({
            message:"validado",
            personaje:usuario,
            token:token
        })
    }else{
        return res.json({
            message:"no validado",
        })      
    }
}
module.exports = {
    crearP,
    crearB,
    crearC,
    crearV,
    prueba,
    pedirVentas,
    login
}
