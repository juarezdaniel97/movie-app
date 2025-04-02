import React, { useEffect, useState } from "react";
import { useMovieContext } from "../../contexts/MoviesContext";
import { ChevronRight, Loader2 } from "lucide-react";
import MovieCard from "./MovieCard";

const MovieCategory = ({ category, title }) => {
    const { moviesByCategory, loading, fetchMovies } = useMovieContext();
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        fetchMovies(category);
    }, [category]);

    if (loading[category]) {
        return (
            <div className="flex justify-center items-center h-40">
                <Loader2 className="w-8 h-8 animate-spin text-green-600" />
                <span className="text-lg font-semibold text-gray-700 ml-2">Cargando...</span>
            </div>
        );
    }

    if (!moviesByCategory[category] || moviesByCategory[category].length === 0) {
        return (
            <div className="flex flex-col justify-center items-center h-40 text-gray-500">
                <p className="text-lg">No se encontraron películas</p>
            </div>
        );
    }

    return (
        <div className="mb-12 p-4 rounded-lg shadow-sm bg-white border border-gray-200">
            <div className="flex items-center justify-between border-b pb-3">
                <h2 className="text-2xl font-extrabold text-gray-800">{title}</h2>

                {/* Formulario para seleccionar la cantidad de películas a mostrar */}
                <form>
                    <label className="text-sm text-gray-600 mr-2">Mostrar:</label>
                    <select
                        value={limit}
                        onChange={(e) => setLimit(Number(e.target.value))}
                        className="border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-green-300 transition"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value={moviesByCategory[category].length}>Todas</option>
                    </select>
                </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4">
                {moviesByCategory[category].slice(0, limit).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            {moviesByCategory[category].length > limit && (
                <div className="flex justify-end items-center mt-4">
                    <button
                        onClick={() => setLimit(moviesByCategory[category].length)}
                        className="flex items-center text-green-600 hover:text-green-700 transition-transform transform hover:scale-105 font-semibold"
                    >
                        Ver todas <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MovieCategory;
