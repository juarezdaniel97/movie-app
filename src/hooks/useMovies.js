import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { data } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
const API_KEY = import.meta.env.VITE_TMDB_KEY_API

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [moviesByCategory, setMoviesByCategory] = useState({
        popular: [],
        topRated: [],
        upcoming: []
    });

    const fetchMovies = useCallback(async(category) => {
        setLoading(true)

        let endpoint;
        switch (category) {
            case 'popular':
                endpoint = `${BASE_URL}/movie/popular`;
                break;
            case 'topRated':
                endpoint = `${BASE_URL}/movie/top_rated`;
                break;
            case 'upcoming':
                endpoint = `${BASE_URL}/movie/upcoming`;
                break;
            default:
                endpoint = `${BASE_URL}/movie/popular`;
                break;
        }

        try {
            const params = { api_key: API_KEY, language: "es-ES" };
            const { data: { results } } = await axios.get(`${endpoint}`, { params });
            
            // Actualizar solo la categoría específica
            setMoviesByCategory(prev => ({...prev, [category]: results }));

        } catch (err) {
            console.error("Error al obtener películas:", err);
            toast.error("Error al obtener las películas");
        } finally {
            setLoading(false)
        }
    }, []);

    // Búsqueda de películas
    const searchMovies = useCallback(async (searchKey) => {
        if (!searchKey) return;
        
        setLoading(true);
        try {
            const params = { api_key: API_KEY, language: "es-ES", query: searchKey };
            
            const { data: { results } } = await axios.get(`${BASE_URL}/search/movie`, { params });

            setMovies(results);

        } catch (err) {
            console.error("Error al buscar películas:", err);
            toast.error("Error al buscar películas");
        } finally {
            setLoading(false);
        }
    }, []);


    return { movies, moviesByCategory, loading, fetchMovies, searchMovies };
};
