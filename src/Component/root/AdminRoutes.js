import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../side-bar/sideBar'
import { Box, useMediaQuery,  useTheme} from '@mui/material'
import { tokens } from "../../theme";

// import Navbar from '../Navbar/Navbar'

function AdminRoutes() {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const theme = useTheme();
    const colors = tokens(theme.mode);
    const storedObj = localStorage.getItem('user');

// Parse the retrieved string back into an object
const token = JSON.parse(storedObj);
console.log(token);
  return (
    <>

     <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
      user={token}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
     
        <Outlet />
      </Box>
    </Box>
      {/* <Outlet/>
      <Footer/> */}

        
    </>
  )
}

export default AdminRoutes