import { createContext, useContext } from "react";
import { useMovies } from "../hooks/useMovies";


const MoviesContext = createContext();


export function MovieProvider({children}) {
    const moviesValues = useMovies();
    
    return (
        <MoviesContext.Provider value={moviesValues}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMovieContext = () => useContext(MoviesContext)