import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../page/Shared/Footer/Footer'
import Header from '../page/Shared/Header/Header'

const Main = () => {
    return (
        <div className='bg-blue-50'>
            <Header/>
            <div className='min-h-[100vh]'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Main