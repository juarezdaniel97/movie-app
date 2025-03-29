import { createContext, useContext } from "react";
//import { useMovies } from "../hooks/useMovies";
import { useMovies } from "../hooks/useMovies2";


const MoviesContext = createContext();


export function MovieProvider({children}) {
    const moviesData  = useMovies();
    
    return (
        <MoviesContext.Provider value={moviesData}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMovieContext = () => useContext(MoviesContext)