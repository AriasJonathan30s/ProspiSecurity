const enco = require('./encode');
const deco = require('./decode');

module.exports = {
    decodeTok: (phrase, tkn)=>{
        return new Promise((resolve, reject) => {
            const acc = deco.token(phrase, deco.clnTk(tkn))
            if (acc) {
                resolve(JSON.stringify(acc));
            } else {
                console.warn('Decode token request error');
                reject(0);
            }
        })
    },
    encodeTok: (tkn, acc)=>{
        return new Promise((resolve, reject) => {
            const account = JSON.parse(acc);
            delete account.pass;
            enco.token(tkn, account)
            .then(resp=>{
                const bearTk = `Bearer ${resp}`
                resolve(bearTk);
            })
            .catch(e=>{
                console.warn('Token request error '+e);
                reject(0);
            })
        })
    },
    encryptPass: (pass)=>{
        return new Promise((resolve, reject) => {
            enco.pass(pass)
            .then(resp=>{
                resolve(resp);
            })
            .catch(e=>{
                console.error(e);
                reject(0);
            })
        })
    },
    login: (values)=>{
        return new Promise((resolve, reject) => {
            const pwds = JSON.parse(values);
            const salt = deco.saltPuller(pwds.fndPass);
            const reqPass = deco.saltedPassEncode(pwds.reqPass, salt);
            if (reqPass == pwds.fndPass) {
                resolve(1);
            } else {
                reject(1);
            }    
        })
    }
}