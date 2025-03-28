import { useState, useEffect } from 'react';
import axios from 'axios';

export const useMovieTrailer = (movieId) => {
    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const API_KEY = import.meta.env.VITE_TMDB_KEY_API;
    const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                setLoading(true);
                
                const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/videos`,{ params: { api_key: API_KEY } }
                );
                
                // Buscar primero trailers oficiales de YouTube
                let trailerVideo = data.results.find(
                    video => video.site === 'YouTube' && video.type === 'Trailer' && video.official === true
                );
                
                // Si no hay trailer oficial, buscar cualquier trailer
                if (!trailerVideo) {
                    trailerVideo = data.results.find(
                        video => video.site === 'YouTube' && video.type === 'Trailer');
                }
                
                setTrailer(trailerVideo ? trailerVideo.key : null);
                setLoading(false);
                
            } catch (err) {
                setError(err.response?.data?.status_message || err.message);
                setLoading(false);
            }
        };
        
        if (movieId) {
            fetchTrailer();
        }
        
    }, [movieId, API_KEY, BASE_URL]);

    return { trailer, loading, error };
};