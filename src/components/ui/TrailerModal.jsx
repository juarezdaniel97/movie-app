import React from 'react'
import Button from '../shared/Button'
import { X } from 'lucide-react'

const TrailerModal = ({ movieId, setIsOpen }) => {
    // La URL base para embeber videos de YouTube
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${movieId}?autoplay=1`
    
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
                <div className="relative pt-[56.25%] w-full mt-4">
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full"
                        src={youtubeEmbedUrl}
                        allowFullScreen
                        title="Movie Trailer"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default TrailerModal