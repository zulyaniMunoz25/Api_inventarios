import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los usuarios
 */
const obtenerUsuarios = (estado = true) => {
    return axiosConfig.get('usuarios?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea Usuario
 */
const crearUsuario = (data, email) => {
    return axiosConfig.post('usuarios', data, email, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualizar usuario por id
 */
const editarUsuarioPorID = (usuarioId, data, ) => {
    return axiosConfig.put('usuarios/'+usuarioId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra usuario por ID
 */
 const borrarUsuarioPorID = (tipoId) => {
    return axiosConfig.delete('usuarios/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta usuario por ID
 */
 const obtenerUsuarioPorID = (tipoId) => {
    return axiosConfig.get('usuarios/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerUsuarios,
    crearUsuario,
    editarUsuarioPorID,
    borrarUsuarioPorID,
    obtenerUsuarioPorID
}