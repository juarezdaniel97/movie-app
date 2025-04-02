import React from 'react';
import { PlayCircle, Heart, Search } from 'lucide-react';

const Presentacion = () => {
    const FEATURES_ICON = [
        {
            icon: Search,
            color: "text-green-600",
            title: "Explora",
            description: "Navega por miles de películas de todos los géneros.",
        },
        {
            icon: Heart,
            color: "text-red-500",
            title: "Favoritos",
            description: "Guarda tus películas preferidas para verlas después.",
        },
        {
            icon: PlayCircle,
            color: "text-blue-600",
            title: "Tráilers",
            description: "Mira tráilers y decide qué ver en minutos.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-green-50 to-white py-16 md:py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                        Explora, Colecciona y Vive el Cine
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                        MovieApp te permite explorar un universo de películas, guardar tus favoritas y 
                        mantenerte actualizado con los últimos estrenos de una manera sencilla e intuitiva.
                    </p>
                    
                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                        {FEATURES_ICON.map((feature, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 animate-pulse`} />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-base">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="#Movies" 
                            className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 
                            transition-all duration-300 font-semibold w-full sm:w-auto text-center"
                        >
                            Comenzar a Explorar
                        </a>

                        <button 
                            className="bg-white text-green-600 px-8 py-3 rounded-lg border border-green-600 
                            hover:bg-green-50 transition-all duration-300 shadow-md font-semibold w-full sm:w-auto text-center"
                        >
                            Más Información
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentacion;
