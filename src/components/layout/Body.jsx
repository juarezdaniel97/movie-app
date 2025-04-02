import React from 'react';
import Presentacion from '../ui/Presentacion';
import SearchBar from '../shared/SearchBar';
import MovieCategory from '../ui/MovieCategory';
import { useMovieContext } from '../../contexts/MoviesContext';
import MovieCard from '../ui/MovieCard';

const Body = () => {
    const { movies } = useMovieContext();

    return (
        <>
            <Presentacion />
            <div className="container mx-auto px-6 py-12 min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto" id="Movies">
                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mt-6 mb-12">
                        📽️ <span className="text-indigo-600">Lista de Películas</span> 🍿
                    </h1>

                    <SearchBar />

                    {movies.length > 0 && (
                        <h2 className="text-xl font-semibold text-gray-700 mt-6">🎬 Resultados</h2>
                    )}

                    {/* Grid de películas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-6">
                        {movies &&
                            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                    </div>

                    {/* Secciones de categorías */}
                    <div className="mt-12 space-y-8">
                        <MovieCategory category="upcoming" title="🎞️ Próximos Estrenos" />
                        <MovieCategory category="popular" title="🔥 Películas Populares" />
                        <MovieCategory category="topRated" title="⭐ Mejor Calificadas" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;
