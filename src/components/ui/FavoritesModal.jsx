import React from 'react'
import Button from '../shared/Button'
import { Trash2, X } from 'lucide-react'
import { useFavoriteListContext } from '../../contexts/FavoritesContext'

const FavoritesModal = ({setIsOpen}) => {
    const { moviesFavorites, removeFromFavorites, clearFavorites } = useFavoriteListContext();

    const URL_IMAGE = import.meta.env.VITE_URL_IMAGE
    
    console.log('moviesFavorites-->', moviesFavorites);
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 opacity-90 shadow-md">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 relative">
                
                {/* Button Close */}
                <Button
                        style={'absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer'}
                        action={setIsOpen}
                        name={<X className="w-5 h-5" />}
                    />
                
                 {/* Title */}
                <h2 className="text-xl font-bold text-center mb-5">Movies Favorites 🎬</h2>


                {/* Movies List */}
                <ul className="max-h-60 overflow-y-auto border-t border-b">
                    {
                        moviesFavorites.length > 0 ? 
                        (
                            moviesFavorites.map((movie)=>(
                                <li key={movie.id} className="px-4 py-2 flex items-center gap-2 border-b last:border-none hover:bg-gray-100">
                                    <div className="flex items-center gap-3 w-full">
                                        <img 
                                            src={`${URL_IMAGE + movie.poster_path}`} 
                                            alt={movie.title}
                                            className="w-10 h-10 rounded-md"
                                        />
                                        <span> {movie.title} </span>
                                    </div>
                            
                            <div>
                                {/* Button delete for id */}
                                <Button
                                    style={'text-red-700 hover:text-red-600 cursor-pointer'}
                                    action={removeFromFavorites}
                                    name={<Trash2 className="w-5 h-5"/>}
                                    param={movie.id}
                                />
                            </div>
                            </li>
                            ))
                        ) : (<p className="text-center text-gray-500 m-3">No hay películas favoritas</p>)
                    }
                </ul>

                {moviesFavorites.length > 0 && (
                    <Button
                        style={'w-full mt-4 bg-red-700 text-white py-2 rounded-lg hover:bg-red-600 transition cursor-pointer'}
                        action={clearFavorites}
                        name={'Vacir Lista'}
                    />
                )}
            </div>
        </div>
    )
}

export default FavoritesModal