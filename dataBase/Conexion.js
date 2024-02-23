const mongoose = require ("mongoose")

const conexion = async()=>{
    try{
        //para conectarse a una base de datos mongodb en local host, ya no se utiliza localhost, sino la palabra "127.0.0.1"
        //await mongoose.connect("mongodb://localhost:27017/back_precios");
        await mongoose.connect(process.env.DATABASE_URL);
        //parametros a pasar para conectar si falla
        //useNewUrlParser=true;
        //useunifiedTopology=true;
        //useCreateIndex=true;

        console.log ("conectado a la base de datos");
    } catch(error) {
        console.log(error);
        throw new error("no se ha podido conectar a la base de datos")
    }
}

module.exports= { //esto sirve para exportar un modulo en especifico, una funcion en especifico.
    conexion
}