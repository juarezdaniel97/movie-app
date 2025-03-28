import React, { useState } from 'react'
import { Search } from 'lucide-react'



const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(query)
    }


    return (
        <div className="w-full max-w-2xl mx-auto mt-2 mb-10">
            <form onSubmit={handleSearch} className="relative flex items-center">
                <input 
                    type="text" 
                    placeholder="Busca tu película favorita..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-gray-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700"
                />
                <button 
                    type="submit" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 cursor-pointer"
                >
                    <Search className="w-5 h-5" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar