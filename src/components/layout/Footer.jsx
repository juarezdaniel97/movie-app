import React from 'react'
import { Heart, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-green-800 to-green-600 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Columna de Información */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">MovieApp</h3>
                        <p className="text-green-200">
                            Descubre, guarda y disfruta de tus películas favoritas. 
                            Una experiencia de entretenimiento única.
                        </p>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-200 transition">Inicio</a></li>
                            <li><a href="#" className="hover:text-green-200 transition">Películas</a></li>
                            <li><a href="#" className="hover:text-green-200 transition">Favoritos</a></li>
                            <li><a href="#" className="hover:text-green-200 transition">Sobre Nosotros</a></li>
                        </ul>
                    </div>

                    {/* Redes Sociales */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-green-200 transition">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-green-200 transition">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-green-200 transition">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Derechos de autor */}
                <div className="border-t border-green-700 mt-8 pt-6 text-center">
                    <p className="flex items-center justify-center gap-2">
                        Hecho con <Heart className="text-red-500 fill-red-500" size={20} /> por Tu Nombre
                    </p>
                    <p className="text-sm text-green-200 mt-2">
                        © {new Date().getFullYear()} MovieApp. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer