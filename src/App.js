import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Home from './Component/Navbar/Navbar'
import Login from './Component/Login/Login'
import Donation from './Component/Donation/Donation';
import Contact from './Component/Contact/contact';
import VerfiedMember from './Component/VerfiedMember/verfied';
import DonorList from './Component/Donorlist/DonorList'
import Root from './Component/root/Root';
import Contain from './Component/Navbar/Contain';
import RagistrationForm from './Component/ragistrationForm/RagistrationForm';

import Manajment from './Component/ManajmentTeam/Manajment'
import Icard from './Component/I-card/Icard'


import Events from './Component/event/Events';
import AdminRoutes from './Component/root/AdminRoutes';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useMode } from './theme';






// import Upcoming from './Components/Navbar/Upcomingevent/upcoming'


function App() {
  const [theme, colorMode] = useMode();

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route>
        <Route element={<Root />}>
          <Route path='/' element={<Contain />} />
           <Route path='/VerfiedMember' element={<VerfiedMember />} /> 
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Donation' element={<Donation/>} />
          <Route path='/DonorList' element={<DonorList/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/ragistrationform' element={<RagistrationForm/>} />
          {/* <Route path='/Event' element={<Event/>} /> */}

         
          <Route path='/Manajment' element={<Manajment/>} />


        
          <Route path='/Icard' element={<Icard/>} />

       
          <Route path='/events' element={<Events/>} />

         

         

        </Route>

        <Route element={<AdminRoutes />}>
          <Route path='/admin' element={<h6>hello world</h6>} />
          <Route path='/categories' element={<h2>sandansk</h2>} />
          <Route path='/Products' element={<h2>Product</h2>} />
        </Route>

      </Route>

    )
  )
  return(
    <>
       <ThemeProvider theme={theme}>
        <CssBaseline />
    <RouterProvider router={router}>
    
    </RouterProvider>
    </ThemeProvider>
    </>
  );
}

export default App;