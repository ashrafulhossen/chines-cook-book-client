import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../page/Shared/Footer/Footer'
import Header from '../page/Shared/Header/Header'

const Main = () => {
    return (
        <div className='bg-blue-100'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main