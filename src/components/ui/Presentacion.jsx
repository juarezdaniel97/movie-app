import React from 'react'
import { PlayCircle, Heart, Search } from 'lucide-react'


const Presentacion = () => {
    return (
        <div className="bg-green-50 py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6">
                        Descubre, Guarda y Disfruta tus Películas
                    </h1>
                    
                    <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed px-4">
                        MovieApp te permite explorar un universo de películas, guardar tus favoritas y 
                        mantenerte actualizado con los últimos estrenos de una manera sencilla e intuitiva.
                    </p>
                    
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8 md:mb-12">
                        {[
                            {
                                Icon: Search,
                                color: "text-green-600",
                                title: "Explora",
                                description: "Navega por miles de películas de todos los géneros"
                            },
                            {
                                Icon: Heart,
                                color: "text-red-500",
                                title: "Favoritos",
                                description: "Guarda tus películas preferidas para verlas después"
                            },
                            {
                                Icon: PlayCircle,
                                color: "text-blue-600",
                                title: "Tráilers",
                                description: "Mira tráilers y decide qué ver en minutos"
                            }
                        ].map((feature, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3"
                            >
                                <feature.Icon className={`w-10 h-10 ${feature.color} mx-auto mb-4`} />
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                        <button className="bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg 
                        hover:bg-green-700 transition-colors font-semibold w-full sm:w-auto">
                            Comenzar a Explorar
                        </button>
                        <button className="bg-white text-green-600 px-6 md:px-8 py-2 md:py-3 rounded-lg 
                        border border-green-600 hover:bg-green-50 transition-colors font-semibold w-full sm:w-auto">
                            Más Información
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentacion