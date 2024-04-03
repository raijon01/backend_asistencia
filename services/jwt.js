const jwt=require("jwt-simple")
const moment=require("moment")

//clave secreta
const secret="clave-secreta-123"

const createToken=(user)=>{
    const payload={
        id:user._id,
        nombre:user.Nombre,
        email:user.Correo,
        contraseña:user.Contraseña,
        iat:moment().unix(), //iat registra la fecha donde se crea el token, por eso el moment, el unix transforma la fecha a formato ilegible
        exp:moment().add(30,"days").unix() //fecha de expiracion del token.

    }
    return jwt.encode(payload,secret) //el jwt codifica el payload, la informacion que le pasas, utilizando una clave secreta que servira para cuando decodificarlo. Esta informacion codificada es a lo que llamamos token.

    //
}
module.exports = {
    secret,
    createToken
}