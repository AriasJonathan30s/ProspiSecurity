const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origin:"*"}));

const ENCRYPT_MANAGEMENT = require('./routes/encrypt');
const DECRYPT_MANAGEMENT = require('./routes/decrypt');


app.use('/encrypt', ENCRYPT_MANAGEMENT);
app.use('/decrypt',DECRYPT_MANAGEMENT)

module.exports = app;