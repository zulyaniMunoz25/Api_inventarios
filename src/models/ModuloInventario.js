const{ Schema, model } = require("mongoose");

const InventarioSchema = Schema({
    serial:{
        type: String,
        required: [true,"requerido"],
        unique:  [true,"equipo en uso"]
    },
        modelo:{
        type: String,
        required: [true,"modelo requerido"]
    },
    descripcion:{
        type: String
    },
    fotos:{
        type: String
    },
    color:{
        type:String
    },
    fechaCompra:{
        type: Date,
        default: new Date()
    },
    precio:{
        type: Number
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    marca:{
        type: Schema.Types.ObjectId,
        ref:'arcaEquipo',
        required: true
    },
    estado:{
        type: Schema.Types.ObjectId,
        ref:'estadoEquipo',
    },

    tipoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'tipoEquipo',
        required: true
    }
})

module.expots = model('Inventatrio', InventarioSchema)