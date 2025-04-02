import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { useMovieContext } from '../../contexts/MoviesContext';
import MovieCard from '../ui/MovieCard';



const SearchBar = () => {
    const { searchMovies, movies } = useMovieContext();
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault()
        searchMovies(query)
        setQuery("")
    }


    return (
        <div className="w-full max-w-2xl mx-auto mt-2 mb-10">
            <form onSubmit={handleSearch} className="relative flex items-center">
                <input 
                    type="text" 
                    placeholder="Busca tu película favorita..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-gray-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700"
                />
                <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 cursor-pointer">
                    <Search className="w-5 h-5" />
                </button>
            </form>

            {/* <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                { 
                    movies && (movies.map((movie)=>(
                        <MovieCard key={movie.id} movie={movie} />
                    )))
                }
            </div> */}
        </div>
    )
}

export default SearchBar