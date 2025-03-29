import React from 'react'
import MovieList from '../ui/MovieList'
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
                    
                    {/* <MovieList/> */}
                    <div className="mt-8">
                        <MovieCategory title="Películas Populares" category="popular" />
                        <MovieCategory title="Mejor Calificadas" category="topRated" />
                        <MovieCategory title="Próximos Estrenos" category="upcoming" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body