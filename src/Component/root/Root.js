import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footers from '../Footer/Footer'


function Root() {
    return (
        <>
        
         <Navbar/>
            <Outlet />
            <Footers/>

        </>
    )
}

export default Root