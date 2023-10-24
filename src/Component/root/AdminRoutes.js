import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../side-bar/sideBar'
import { Box, useMediaQuery,  useTheme ,IconButton} from '@mui/material'
import { tokens } from "../../theme";
import {ChevronRight} from '@mui/icons-material'


// import Navbar from '../Navbar/Navbar'

function AdminRoutes() {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const theme = useTheme();
    const colors = tokens(theme.mode);
    const storedObj = localStorage.getItem('user');

// Parse the retrieved string back into an object
const token = JSON.parse(storedObj);
return token ? (
  <>
  <Box display={ "block" } width="100%" height="100%">
     <IconButton style={{  top: '0px', left: "1%", color: colors.blueAccent[100] ,position:'sticky' }} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <ChevronRight style={{fontSize:'3rem'}}/>

      </IconButton>
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

  </>
) : <Navigate to={"/login"}/>


}

export default AdminRoutes