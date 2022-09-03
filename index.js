import express from "express"
import { conectar } from "./modelo/db_conectar.js";
const app_e = express();
app_e.use(express.static('./vista'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))
app_e.listen('5000', function() {
    console.log('Aplicación iniciada en: http://localhost:5000')
})
app_e.get('/', function(req, res) {
    res.send("Hola Mundo, como estan?")
})