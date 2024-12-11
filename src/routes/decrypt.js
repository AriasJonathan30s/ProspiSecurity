const express = require('express');
const router = express.Router();

const consts = require('../utils/consts');
const secSrvc = require('../services/secService');

router.get('/token',(req,res)=>{
    const headers = req.headers;
    if (headers.tkn) {
        secSrvc.decodeTok(consts.succsMssgs[0], headers.tkn)
        .then(resp=>{
            res.json({ mensaje:resp });
        })
        .catch(e=>{
            if (typeof(e) === 'number') {
                console.warn('Login request error '+ e);
                res.status(501).json({ mensaje: consts.errMssgs[e] });
            } else {
                console.warn('Login request error '+ e);
                res.status(501).json({ mensaje: consts.errMssgs[0] });
            }
        })
    } else {
        console.warn('Parametro erroneo');
        res.status(500).json({ message: consts.errMssgs[0] });
    }
})

router.get('/compare-pwds',(req,res)=>{
    const headers = req.headers;
    if (headers.pwds) {
        secSrvc.login(headers.pwds)
        .then(resp=>{
            if (resp) {
                res.json({ mensaje: consts.succsMssgs[0] });
            } else {
                res.status(501).json({ mensaje: consts.errMssgs[0] });
            }
        })
        .catch(e=>{
            if (typeof(e) === 'number') {
                console.warn('Login request error '+ e);
                res.status(501).json({ mensaje: consts.errMssgs[e] });
            } else {
                console.warn('Login request error '+ e);
                res.status(501).json({ mensaje: consts.errMssgs[0] });
            }
        })
    } else {
        console.warn('Parametro erroneo');
        res.status(500).json({ message: consts.errMssgs[0] });
    }
})

module.exports = router;