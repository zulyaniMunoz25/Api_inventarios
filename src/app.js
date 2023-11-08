const express = require('express');
const app = express();
const cors = require('cors')
const fileUpload = require('express-fileupload')

const tipoEquipo = require('./routes/tipoEquipo')
const estadoEquipo = require('./routes/estadoEquipo')
const marcaEquipo = require('./routes/marcaEquipo')
const usuario = require('./routes/usuarios')
const inventario = require('./routes/inventario')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    TempFilesDir: '/tmp/'
}))
app.use(cors({

}))


app.use('/api/tipoEquipo', tipoEquipo)
app.use('/api/estadoEquipo', estadoEquipo)
app.use('/api/marcaEquipo', marcaEquipo)
app.use('/api/usuario',usuario)
app.use('/api/inventario', inventario)

app.get("*", (req,res) =>{
    return res.status(404).json({
     msj: 'pagina no encontrada'   
    });
});

module.exports = app;


