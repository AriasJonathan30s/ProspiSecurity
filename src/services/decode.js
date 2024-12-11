const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    token: (phrase, tkn)=>{
        return jwt.decode(tkn,phrase);
    },
    clnTk: (tkn)=>{
        return tkn.substring(7,tkn.length);
    },
    saltPuller: (pwd)=>{
        return pwd.substring(0,29);
    },
    saltedPassEncode:(inputPass,salt)=>{
        return bcrypt.hashSync(inputPass,salt);
    }
}