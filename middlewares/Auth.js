//importar modulos
const jwt=require("jwt-simple")
const moment=require("moment")

//importar claves secretas
const libjwt=require("../services/jwt")
const secret=libjwt.secret
//

exports.auth=(req,res,next)=>{
    let token=req.headers.authorization.replace(/['"]+/g,'')
    let payload=jwt.decode(token,secret)

    if(payload.exp<=moment().unix()){
        return res.json({message:"error"})
    }
    console.log(req);
    req.Client=payload
    //pasar a ejecutar siguiente accion
    next()
}