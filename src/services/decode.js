const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    saltPuller: (pwd)=>{
        return pwd.substring(0,29)
    },
    saltedPassEncode:(inputPass,salt)=>{
        return bcrypt.hashSync(inputPass,salt)
    }
}