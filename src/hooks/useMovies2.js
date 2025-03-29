import js from "@eslint/js";
import { useState } from "react";

export const useMovies = () =>{

    const [movies, setMovies] = useState({
        popular: [],
        topRated: [],
        upcoming: []
    });

    const [loading, setLoading] = useState({
        popular: false,
        topRated: false, 
        upcoming: false
    });

    const [error, setError] = useState(null);


    const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
    const API_KEY = import.meta.env.VITE_TMDB_KEY_API

    const fetchMoviesByCategory = async (category) =>{
        setLoading(prev => ({...prev, [category]: true}));

        let endpoint;
        switch (category) {
            case 'popular':
                endpoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
                break;
            case 'topRated':
                endpoint = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES`;
                break;
            
            case 'upcoming':
                endpoint = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=es-ES`;
                break;
        
            default:
                endpoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
                break;
        }
    
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            
            setMovies(prev => ({...prev, [category]: data.results}));


        } catch (err) {
            setError(err.message);

        }finally{
            setLoading(prev => ({...prev, [category]: false}));
        }
    };

    const fetchAllCategories  = async () =>{
        await Promise.all([
            fetchMoviesByCategory('popular'),
            fetchMoviesByCategory('topRated'),
            fetchMoviesByCategory('upcoming')
        ]);
    };

    return {
        movies,
        loading,
        error,
        fetchMoviesByCategory,
        fetchAllCategories
    }

}