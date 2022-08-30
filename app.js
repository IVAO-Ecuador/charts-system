const express = require('express');
const path = require('path');
const fs = require("fs");
const bodyParser = require('body-parser');
const { default: fetch } = require('node-fetch');


/* Express functions */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./'));
app.use(express.json());

app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.sendFile('./index.html')
})

app.get('/getUser/:user', (req,res) => {
    const userToken = req.params.user;
    fetch(`https://login.ivao.aero/api.php?type=json&token=${userToken}`)
    .then(data => data.json())
    .then(data => {
        if(data.vid != null){
            res.send(data)
        }
    });
})

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));