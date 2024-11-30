const express = require('express');
const router = express.Router();

const consts = require('../utils/consts');
const secSrvc = require('../services/secService');

router.get('/token',(req, res)=>{
    const headers = req.headers;
    try {
        if (headers.acc && headers.tkn) {
            secSrvc.encodeTok(headers.tkn, headers.acc)
            .then(resp=>{
                res.json({mensaje: resp})
            })
            .catch(e=>{
                console.warn(e);
                res.status(500).json({ mensaje: consts.errMssgs[0] });
            })
        } else {
            res.status(500).json({mensaje: consts.errMssgs[2]});
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({mensaje: consts.errMssgs[0]});
    }
})

router.get('/password',(req,res)=>{
    const headers = req.headers;
    try {
        if (headers.value) {
            secSrvc.encryptPass(headers.value)
            .then(resp=>{
                res.json({ mensaje: resp });
            })
            .catch(e=>{
                console.error(e);
                res.status(500).json({ mensaje: consts.errMssgs[0] });
            })
        } else {
            res.status(500).json({mensaje: consts.errMssgs[2]});
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({mensaje: consts.errMssgs[0]});
    }
})

module.exports = router;