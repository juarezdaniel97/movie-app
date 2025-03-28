import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useMoviesFavorites = () => {

    const [moviesFavorites, setMoviesFavorites] = useState(()=>{
        return JSON.parse(localStorage.getItem('movies')) || [];
    });


    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(moviesFavorites));

    }, [moviesFavorites])

    const addToFavorites = (movie) => {
        // Verificar si la película ya está en favoritos
        const isAlreadyFavorite = moviesFavorites.some((favMovie) => favMovie.id === movie.id);

        if (isAlreadyFavorite) {
            toast.info(`"${movie.title}" ya está en favoritos 😉`);
            return;
        }

        // Si no está en favoritos, la agrega
        const updatedList = [...moviesFavorites, movie];
        setMoviesFavorites(updatedList);
        toast.success(`"${movie.title}" agregada a favoritos 🎬`);
    };

    const removeFromFavorites = (id) => {
        const updatedList = moviesFavorites.filter((movie) => movie.id !== id);
        setMoviesFavorites(updatedList);
        toast.error("Eliminada de Favoritos")
    };


    const clearFavorites = () => {
        setMoviesFavorites([]);
        toast.error('Lista de favoritos Eliminada')
    };

return {moviesFavorites, addToFavorites, removeFromFavorites, clearFavorites};

}