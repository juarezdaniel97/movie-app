import React, { useEffect } from 'react'
import { Loader2, Film } from 'lucide-react'
import MovieCard from '../ui/MovieCard'
import { useMovieContext } from '../../contexts/MoviesContext'


const MovieList = () => {
    
    const { movies, loading, fetchMovies } = useMovieContext()
    
    useEffect(() => {
        fetchMovies()
    }, [fetchMovies])
    
    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className='text-2xl font-bold text-green-600'>Cargando... </span> <Loader2 className="w-12 h-12 animate-spin text-green-600" />
            </div>
        )
    }

    if (movies.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center h-64 text-gray-500">
                <Film className="w-12 h-12 mb-4" />
                <p className="text-xl">No se encontraron películas</p>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>

    )
}

export default MovieList