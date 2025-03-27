import { createContext, useContext } from "react";
import { useMoviesFavorites } from '../hooks/useMoviesFavorites'

const FavoritesListContext = createContext();

export function FavoriteListProvider({children}) {
    const favoritesListValue = useMoviesFavorites();

    return(
        <FavoritesListContext.Provider value={favoritesListValue}>
            {children}
        </FavoritesListContext.Provider>
    )
}

export const useFavoriteListContext = () => useContext(FavoritesListContext)