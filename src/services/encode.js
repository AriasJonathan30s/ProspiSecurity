const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    token: (tkn, acc)=>{
        return new Promise((resolve, reject) => {
            try {
                resolve(jwt.sign(acc,tkn));
            } catch (e) {
                reject(e);
            }
        })
        
    },
    pass: (passVal)=>{
        return new Promise((resolve, reject) => {
            try {
                const salt = bcrypt.genSaltSync(16);
                const hash = bcrypt.hashSync(passVal,salt);
                resolve(hash);
            } catch (e) {
                reject(e);
            }
        })
    }
}