import { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { useMovieContext } from '../../contexts/MoviesContext'

const MovieCategory = ({ title, category, showAll = false }) => {
    const { movies, loading, fetchMoviesByCategory } = useMovieContext();


    useEffect(() => {
        fetchMoviesByCategory(category);
    }, [category]);
    
    if (loading[category]) {
        return (
        <div className="flex justify-center items-center h-40">
            <span className='text-lg font-bold text-green-600'>Cargando... </span>
        </div>
        );
    }
    
    if (!movies[category] || movies[category].length === 0) {
        return (
        <div className="flex flex-col justify-center items-center h-40 text-gray-500">
            <p className="text-lg">No se encontraron películas</p>
        </div>
        );
    }

    // Si showAll es false, mostramos solo 5 películas
    const moviesToShow = showAll ? movies[category] : movies[category].slice(0, 10);

    return (
        <div className="mb-12">

            <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-4">{title}</h2>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {
                    moviesToShow.map((movie) => ( <MovieCard key={movie.id} movie={movie} />))
                }
            </div>

            <div className='flex justify-end items-center mt-4'>
                {
                    !showAll && movies[category].length > 5 && (
                    <button className="flex items-center text-green-600 hover:text-green-700 cursor-pointer">
                        Ver todas <ChevronRight className="w-4 h-4 ml-1" />
                    </button>)
                }
            </div>
        </div>
    );
};

export default MovieCategory;