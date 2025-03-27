import React, { useState } from 'react'
import Button from '../shared/Button'
import FavoritesModal from '../ui/FavoritesModal'


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <header className='flex justify-between items-center p-5 mx-10 text-white shadow-md'>
                <div>
                    Logo
                </div>

                <Button
                    style={'bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer'}
                    action={setIsOpen}
                    name={'Favorites'}
                />
            </header>

            {
                isOpen && (
                    <FavoritesModal
                        setIsOpen={setIsOpen}
                    />
                )
            }
        </div>
    )
}

export default Header