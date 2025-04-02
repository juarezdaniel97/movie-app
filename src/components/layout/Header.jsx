import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import Button from "../shared/Button";
import FavoritesModal from "../ui/FavoritesModal";


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-green-800 to-green-600 shadow-lg">
        <header className="container mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo y Menú Móvil */}
            <div className="flex items-center space-x-4">

                <Button
                    style={'text-white w-8 h-8 md:hidden focus:outline-none transition-transform duration-300 transform hover:scale-110'}
                    action={setMenuOpen}
                    name={menuOpen ? <X /> : <Menu />}
                />

                <div className="flex items-center space-x-2">
                    <img src="/cine-radar.webp" alt="Cine Radar" className="h-10 md:h-12 rounded-lg shadow-lg"/>
                    <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
                        Cine Radar
                    </span>
                </div>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
                {["Home", "About", "Contact"].map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-white font-medium tracking-wide hover:text-green-200 transition-all duration-300"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* Botón de Favoritos */}
            <div className="flex items-center space-x-4">
                <Button
                        style={'bg-white text-green-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-100 flex items-center space-x-2'}
                        action={setIsOpen}
                        name={
                        <><Heart className="w-5 h-5" />
                        <span>Favoritos</span></>}
                    />
            </div>
        </header>

        {/* Menú Móvil */}
        {menuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-green-700 text-white py-4 shadow-lg">
                <nav className="flex flex-col items-center space-y-4">
                    {["Home", "About", "Contact"].map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-lg font-medium tracking-wide hover:text-green-300 transition-all duration-300"
                            onClick={toggleMenu}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        )}

        {/* Modal de Favoritos */}
        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <FavoritesModal setIsOpen={setIsOpen} />
            </div>
        )}
    </div>
    )
}

export default Header