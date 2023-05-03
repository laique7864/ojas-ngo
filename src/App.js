import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Home from './Component/Navbar/Navbar'
import Login from './Component/Login/Login'
import Donation from './Component/Donation/Donation';
import Contact from './Component/Contact/contact';
// import verfied from './Component/VerfiedMember/verfied';
import DonorList from './Component/Donorlist/DonorList'
import Root from './Component/root/Root';
import Contain from './Component/Navbar/Contain';
import RagistrationForm from './Component/ragistrationForm/RagistrationForm';

// import Upcoming from './Components/Navbar/Upcomingevent/upcoming'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route>
        <Route element={<Root />}>
          <Route path='/' element={<Contain />} />
          {/* <Route path='/VerfiedMember' element={<Verfied />} /> */}
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Donationpage' element={<Donation/>} />
          <Route path='/DonorList' element={<DonorList/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/ragistrationform' element={<RagistrationForm/>} />

        </Route>

      </Route>

    )
  )
  return(
    <>
    
    <RouterProvider router={router}>
    
    </RouterProvider>
    </>
  );
}

export default App;