import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
const API_KEY = import.meta.env.VITE_TMDB_KEY_API

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({ title: "Cargando..." });
    const [loading, setLoading] = useState(false);

    const fetchMovies = useCallback(async (searchKey = "") => {
        setLoading(true);
        try {
            const type = searchKey ? "search" : "discover";
            const params = { api_key: API_KEY, language: "es-ES" };
            
            if (searchKey) params.query = searchKey;

            const { data: { results } } = await axios.get(`${BASE_URL}/${type}/movie`, { params });

            setMovies(results);

            if (results.length > 0) setMovie(results[0]);
        
        } catch (error) {
            console.error("Error al obtener películas:", error);
            toast.error('Error al obtener las películas')

        } finally {
            setLoading(false);
        }
    }, []);

    return { movies, movie, loading, fetchMovies };
};
