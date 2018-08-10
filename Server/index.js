require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING}=process.env
massive(CONNECTION_STRING).then ((db) =>{
    app.set('db', db)
})
const app = express();
app.use(bodyParser.json());


app.get( '/api/inventory', controller.getAll );

app.delete( '/api/product/:id', controller.delete );




app.listen(SERVER_PORT, () => console.log (`Listening on port ${SERVER_PORT}`))