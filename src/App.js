import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Home from './Component/Navbar/Navbar'
import Login from './Component/Login/Login'
import Donation from './Component/Donation/Donation';
import Contact from './Component/Contact/contact';
import VerifiedMember from './Component/VerfiedMember/VerfiedMember';
import DonorList from './Component/Donorlist/DonorList'
import Root from './Component/root/Root';
import Contain from './Component/Navbar/Contain';
import Registrationform from './Component/RegistrationForm/RagistrationForm';
import Manajment from './Component/ManajmentTeam/Manajment';
import Icard from './Component/I-card/Icard';
import 'react-responsive-pagination/themes/classic.css';


import Events from './Component/event/Events';
import AdminRoutes from './Component/root/AdminRoutes';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useMode } from './theme';
import AddEvent from './Component/addevent/AddEvent';
import DonerListAdmin from './Component/adminDonerList/DonerListAdmin';
import DonationForm from './Component/donation-form/DonationForm';
import VerifiedMembers from './Component/verifiedmembers/VerifiedMembers';
import AddPost from './Component/add-post/AddPost';
import DonorTable from './Component/donor-list-table/DonorTable';
import GovtRecogntions from './Component/Govt.Recogntions/GovtRecogntions';
import Registration from './Component/junaid/Registration';
import Privacy from './Component/Footer/privacy';
import Termcondition from './Component/Footer/Term&condition';
import Volunteer from './Component/volunteer/volunteer';







// mdmoinmkshaikh@gmail.com
// 9420114282@Mks
// import Upcoming from './Components/Navbar/Upcomingevent/upcoming'


function App() {
  const [theme, colorMode] = useMode();

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route>
         <Route path='/Login' element={<Login/>} />
        <Route element={<Root />}>
          <Route path='/' element={<Contain />} />
          <Route path='/VerifiedMember' element={<VerifiedMember />} />
          <Route path='/Volunteer' element={<Volunteer />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Donation' element={<Donation/>} />
          <Route path='/DonorList' element={<DonorList/>} />
          <Route path='/Registrationform' element={<Registrationform/>} />
          <Route path='/DonationForm' element={<DonationForm/>} />
        

          <Route path='/Manajment' element={<Manajment />} />
      

          <Route path='/Icard' element={<Icard />} />

          
            <Route path='/events' element={<Events />} />
            <Route path='/GovtRecogntions' element={<GovtRecogntions />} />
      
            <Route path='/Registration' element={<Registration />}/>
            <Route path='/Privacy'  element={<Privacy/>}/>
            <Route path='/Termcondition' element={<Termcondition/>}/>

        </Route>

        <Route element={<AdminRoutes />}>
          <Route path='/admin' element={<h6>hello world</h6>} />
          <Route path='/admindonerlist' element={<DonerListAdmin />} />
          <Route path='/event' element={<AddEvent />} />
          <Route path='/Posts' element={<AddPost />} />
          <Route path='/VerifiedMembers' element={<VerifiedMembers />} />
          <Route path='/DonorTable' element={<DonorTable/>} />

        </Route>

      </Route>
      // VerifiedMembers
    )
  )
  return (
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