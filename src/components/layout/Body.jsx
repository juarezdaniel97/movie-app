import React from 'react'
import Presentacion from '../ui/Presentacion'
import SearchBar from '../shared/SearchBar'
import MovieCategory from '../ui/MovieCategory'

const Body = () => {
    return (
        <>
            <Presentacion/>
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <div className="max-w-7xl mx-auto" id='Movies'>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-5 mb-10 text-gray-800 flex items-center justify-center gap-4">
                        <span>📽️ Lista de Películas 🍿</span>
                    </h1>

                    <SearchBar/>
                    
                    <div className="mt-8">
                        <MovieCategory category='upcoming' title='Próximos Estrenos'/>
                        <MovieCategory category='popular' title='Peliculas Populares'/>
                        <MovieCategory category='topRated' title='Mejor Calificadas'/>
                        {/* <MovieCategory category='top_rated' title='Mejor Calificadas'/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body