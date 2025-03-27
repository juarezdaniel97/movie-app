import React from 'react'
import MovieList from '../ui/MovieList'
import Presentacion from '../ui/Presentacion'
import SearchBar from '../shared/SearchBar'

const Body = () => {
    return (
        // <div className="container mx-auto p-5">
        //     <h1 className="text-2xl font-bold text-center mb-4">Lista de Películas</h1>
        //     <MovieList/>
        // </div>
        <>
            <Presentacion/>
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800 flex items-center justify-center gap-4">
                        <span>📽️</span>
                            Lista de Películas
                        <span>🍿</span>
                    </h1>

                    <SearchBar/>
                    
                    <MovieList/>
                </div>
            </div>
        </>
    )
}

export default Body