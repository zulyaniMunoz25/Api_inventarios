import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los tipos de equipo
 */
const obtenerMarcaEquipos = (estado = true) => {
    return axiosConfig.get('marcaEquipo?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea tipo de equipo
 */
const crearMarcaEquipo = (data) => {
    return axiosConfig.post('marcaEquipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza un tipo de equipo por ID
 */
const editarMarcaEquipoPorID = (tipoId, data) => {
    return axiosConfig.put('marcaEquipo/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra un tipo de equipo por ID
 */
 const borrarMarcaEquipoPorID = (tipoId) => {
    return axiosConfig.delete('marcaEquipo/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta un tipo de equipo por ID
 */
 const obtenerMarcaEquipoPorID = (tipoId) => {
    return axiosConfig.get('marca/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerMarcaEquipos,
    crearMarcaEquipo,
    editarMarcaEquipoPorID,
    borrarMarcaEquipoPorID,
    obtenerMarcaEquipoPorID
}