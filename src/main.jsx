import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {MovieProvider} from './contexts/MoviesContext.jsx'
import { FavoriteListProvider } from './contexts/FavoritesContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <FavoriteListProvider>
        <App />
      </FavoriteListProvider>
    </MovieProvider>
  </StrictMode>,
)
