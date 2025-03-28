import React from 'react'
import Button from '../shared/Button'
import { Loader, X } from 'lucide-react'
import { useMovieTrailer } from '../../hooks/useMovieTrailer'

const TrailerModal = ({ movieId, setIsOpen }) => {
    const { trailer, loading, error } = useMovieTrailer(movieId);
    
    // La URL base para embeber videos de YouTube
    const youtubeEmbedUrl = trailer ? `https://www.youtube.com/embed/${trailer}?autoplay=1` : '';
    
    console.log('trailer ->', trailer);
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg w-full max-w-3xl relative">
                {/* Botón Cerrar */}
                <Button
                    style={'absolute top-2 right-2 text-white z-10 hover:text-gray-300 cursor-pointer'}
                    action={setIsOpen}
                    name={<X className="w-6 h-6" />}
                />
                
                {/* Contenedor del iframe con ratio 16:9 */}
                <div className="relative pt-[56.25%] w-full mt-4 bg-black">
                    {loading ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Loader className="w-12 h-12 text-blue-500 animate-spin" />
                        </div>
                    ) : error ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-red-500 text-center">
                                Error al cargar el tráiler. Por favor, intenta más tarde.
                            </p>
                        </div>
                    ) : !trailer ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-center">
                                No se encontró tráiler para esta película.
                            </p>
                        </div>
                    ) : (
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full"
                            src={youtubeEmbedUrl}
                            allowFullScreen
                            title="Movie Trailer"
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TrailerModal