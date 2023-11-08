import React from 'react'
import NavBar from '../components/ui/NavBar'
import { Routes, Route } from 'react-router-dom'
import TipoEquipo from '../components/tipoEquipo/TipoEquipo'
import EstadoEquipo from '../components/estado/EstadoEquipo'
import MarcaEquipo from '../components/marca/MarcaEquipo'
import Usuario from '../components/usuario/Usuario'
import NotFound from '../components/ui/NotFound'

export default function AppRouter() {
  return (
    <div>
        <NavBar title={'IUD'}/>
        <main className='container'>
            <Routes >
                <Route path='/' element={<TipoEquipo />} />
                <Route path='/estadoEquipo' element={<EstadoEquipo />} />
                <Route path='/marcaEquipo' element={<MarcaEquipo />} />
                <Route path='/usuario' element={<Usuario />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    </div>
  )
}
