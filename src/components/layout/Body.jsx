import React from 'react'
import MovieList from '../ui/MovieList'
import Presentacion from '../ui/Presentacion'
import SearchBar from '../shared/SearchBar'

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
                    
                    <MovieList/>
                </div>
            </div>
        </>
    )
}

export default Body