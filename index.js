const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const router = require('./routes/index.js');
const routerAdmin = require('./routes/admin/index.js');
const fs = require('fs');
app.use(router);
app.use('/admin', routerAdmin);
const path = require('path');

const port = process.env.PORT || 8080;

app.listen(port, err => {
    if(err) throw err;
    console.log(`server running on port: ${port}`);
});