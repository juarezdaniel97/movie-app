import { Heart, Play, Star } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../shared/Button'
import { useFavoriteListContext } from '../../contexts/FavoritesContext';
import TrailerModal from './TrailerModal';

const MovieCard = ({movie}) => {
    const URL_IMAGE = import.meta.env.VITE_URL_IMAGE
    const { addToFavorites } = useFavoriteListContext();

    // Estado para controlar la visibilidad del modal de tráiler
    const [showTrailer, setShowTrailer] = useState(false);
    
    // Función para abrir/cerrar el modal de tráiler
    const toggleTrailer = () => {
        setShowTrailer(!showTrailer);
    };

    return (
        <>
        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl w-full max-w-[280px] mx-auto flex flex-col">
            
            {/* Contenedor de imagen con proporción fija */}
            <div className="relative overflow-hidden w-full pt-[150%]">
                <img
                    src={`${URL_IMAGE + movie.poster_path}`}
                    alt={movie.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                
                {/* Calificación */}
                <div className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span className="text-sm">{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
    
            {/* Información de la película */}
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-white mb-2 line-clamp-1">{movie.title}</h2>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">{movie.overview}</p>
                
                {/* Botones */}
                <div className="flex items-center gap-2 w-full mt-auto">
                    <button 
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer
                        hover:bg-blue-600"
                        onClick={toggleTrailer}
                    >
                        <Play className="w-5 h-5" /> 
                        Tráiler
                    </button>
    
                    <Button
                        style={'bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 cursor-pointer focus:ring-2 focus:ring-red-400 group'}
                        action={addToFavorites}
                        param={movie}
                        name={<Heart className="w-5 h-5 group-hover:fill-white" />}
                    />
                </div>
            </div>
        </div>
        
        {/* Modal de trailer */}
        {showTrailer && (
            <TrailerModal 
                movieId={movie.id} 
                setIsOpen={toggleTrailer} 
            />
        )}
    </>
    )
}

export default MovieCard