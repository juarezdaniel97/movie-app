import React from 'react'
import { Code, GraduationCap, User } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white py-8 px-6 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                
                <div className="flex items-center space-x-4">
                    <GraduationCap className="w-9 h-9 text-yellow-400 transition-transform duration-300 hover:scale-110" />
                    <div>
                        <h3 className="font-bold text-lg tracking-wide">Diplomatura Fullstack</h3>
                        <p className="text-sm text-slate-200">Módulo 4 - Desarrollo Web</p>
                    </div>
                </div>

                
                <div className="flex items-center space-x-4">
                    <Code className="w-9 h-9 text-amber-500 transition-transform duration-300 hover:scale-110" />
                    <div>
                        <h4 className="font-semibold text-lg">Trabajo Práctico N°4</h4>
                        <p className="text-sm text-slate-200">Proyecto consumo de API</p>
                    </div>
                </div>

                
                <div className="flex items-center space-x-4">
                    <User className="w-9 h-9 text-blue-400 transition-transform duration-300 hover:scale-110" />
                    <div>
                        <p className="font-medium text-lg">Daniel Juárez</p>
                        <p className="text-sm text-slate-200">Desarrollador</p>
                    </div>
                </div>
            </div>

            
            <div className="border-t border-green-700 mt-6 pt-4 text-center text-sm">
                <p>© 2025 Diplomatura Fullstack. Todos los derechos reservados.</p>
            </div>
    </footer>
    )
}

export default Footer