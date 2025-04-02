import React, { useEffect, useState } from "react";
import { useMovieContext } from "../../contexts/MoviesContext";
import { ChevronRight, Film, Loader2 } from "lucide-react";
import MovieCard from "./MovieCard";

const MovieCategory = ({ category, title }) => {
    const { movies,moviesByCategory, loading, fetchMovies } = useMovieContext();
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        fetchMovies(category);
    }, [category]);

    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center h-64">
    //             <span className="text-2xl font-bold text-green-600">Cargando... </span>
    //             <Loader2 className="w-12 h-12 animate-spin text-green-600" />
    //         </div>
    //     );
    // }

    if (loading[category]) {
        return (
        <div className="flex justify-center items-center h-40">
            <span className='text-lg font-bold text-green-600'>Cargando... </span>
        </div>
        );
    }

    // if (!movies || movies.length === 0) {
    //     return (
    //         <div className="flex flex-col justify-center items-center h-64 text-gray-500">
    //             <Film className="w-12 h-12 mb-4" />
    //             <p className="text-xl">No se encontraron películas</p>
    //         </div>
    //     );
    // }

    if (!moviesByCategory[category] || moviesByCategory[category].length === 0) {
        return (
        <div className="flex flex-col justify-center items-center h-40 text-gray-500">
            <p className="text-lg">No se encontraron películas</p>
        </div>
        );
    }

    return (
        <div className="mb-12">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-4">{title}</h2>

                {/* Formulario para seleccionar la cantidad de películas a mostrar */}
                <form>
                    <label className="text-sm text-gray-600 mr-2">Mostrar:</label>
                    <select
                        value={limit}
                        onChange={(e) => setLimit(Number(e.target.value))}
                        className="border border-gray-300 rounded-md p-1 text-gray-700"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value={moviesByCategory[category].length}>Todas</option>
                    </select>
                </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {moviesByCategory[category].slice(0, limit).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            {moviesByCategory[category].length > limit && (
                <div className="flex justify-end items-center mt-4">
                    <button
                        onClick={() => setLimit(moviesByCategory.length)}
                        className="flex items-center text-green-600 hover:text-green-700 cursor-pointer"
                    >
                        Ver todas <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MovieCategory;
