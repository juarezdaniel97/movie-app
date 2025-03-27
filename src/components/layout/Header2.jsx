import React, { useState } from 'react'
import { Heart, Menu } from 'lucide-react'
import Button from '../shared/Button'
import FavoritesModal from '../ui/FavoritesModal'


const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-green-800 to-green-600 shadow-lg">
            <header className='container mx-auto px-4 py-3 flex justify-between items-center'>
                <div className="flex items-center space-x-4">
                    <Menu className="text-white w-8 h-8 cursor-pointer md:hidden" />
                    <div className="hidden md:block text-2xl font-bold text-white">
                        Movie App
                    </div>
                </div>

                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#" className="text-white hover:text-green-200 transition-colors">Home</a>
                    <a href="#" className="text-white hover:text-green-200 transition-colors">About</a>
                    <a href="#" className="text-white hover:text-green-200 transition-colors">Contact</a>
                </nav>

                <div className="flex items-center space-x-4">
                    <button
                        className="bg-white text-green-800 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors flex items-center space-x-2"
                        onClick={() => setIsOpen(true)}
                    >
                        <Heart className="w-5 h-5" />
                        <span>Favorites</span>
                    </button>
                </div>
            </header>

            {isOpen && (
                <FavoritesModal
                    setIsOpen={setIsOpen}
                />
            )}
        </div>
    )
}

export default Header2