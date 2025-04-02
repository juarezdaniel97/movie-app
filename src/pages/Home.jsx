import React from 'react'
import Header from '../components/layout/Header'
import Body from '../components/layout/Body'
import Footer from '../components/layout/Footer'


const Home = () => {
    return (

        <div className="min-h-screen bg-slate-50">
            <Header/>
                {/* <Header2/> */}
            
            {/* Contenido principal con scroll */}
            <main className="flex-grow overflow-auto">
                <Body/>
            </main>

            {/* Footer */}
                <Footer className="mt-auto"/>
        </div>
    )
}

export default Home