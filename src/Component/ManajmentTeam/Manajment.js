import React from 'react'
import './Manajment.css'
import MoinSir from '../../assets/Navbarlogo/LMC1.png'
import Aruna from '../../assets/Navbarlogo/LMC2.png'
import Nitin from '../../assets/Navbarlogo/LMC3.png'
import Baba from '../../assets/Navbarlogo/LMC4.png'
import ADV from '../../assets/Navbarlogo/LMC5.png'
import ped from '../../assets/Navbarlogo/LMC6.png'
import gutay from '../../assets/Navbarlogo/LMC7.png'
import ADVSIR from '../../assets/Navbarlogo/LMC8.png'






const ManagementTeam=()=> {
    return (
        <div className='container flex items-center flex-col p-8 gap-8'>
            <div>
                <h3 className='h3 text-1C6FB font-sans text-3xl font-bold'>Management Team</h3>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20  '>
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile '>
                            <img src={MoinSir}/>
                        </div>
                        <p className=' mt-4  font-sans text-1C6FB font-bold'>M.K. SHAIKH PRESIDENT (OJAS.B.U.S.B.S)</p>
                        <p className='font-sans text-1C6FB font-bold'>Parbhani</p>
                        <p className='font-sans text-1C6FB font-bold'>Maharashtra</p>
                    </div>
                </div>
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={Aruna}/>
                        </div>
                        <p className='font-sans text-1C6FB font-bold mt-4'>MISS. ARUNA MUNDHEOJAS LMC PRESIDENT</p>
                        <p className='font-sans text-1C6FB font-bold'>Parbhani</p>
                        <p className='font-sans text-1C6FB font-bold'>Maharashtra</p>
                    </div>
                </div> 
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={Nitin}/>
                        </div>
                      
                        <p className='font-sans text-1C6FB font-bold mt-4'>KU.SEJAL G. MATRA</p>
                        <p className='font-sans text-1C6FB font-bold'> (RESEARCHER NATIONAL CHEMICAL LAB PUNE)</p>
                        <p className='font-sans text-1C6FB font-bold'>OJAS LMC PROJECT-JOIN DIRECTOR</p>
                    </div>
                </div> 
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={Baba}/>
                        </div>
                        <p className='font-sans text-1C6FB font-bold mt-4'>MR. BABA PATHAN</p>
                        <p className='font-sans text-1C6FB font-bold'>(BJP STATE VICE-PRESIDENT MINORITY CELL)</p>
                        <p className='font-sans text-1C6FB font-bold'> OJAS LMC SECRETARY</p>
                    </div>
                </div>
       
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={ADV}/>
                        </div>
                        <p className='font-sans text-1C6FB font-bold mt-4'>ADV.SHAIKH MOHSIN</p>
                        <p className='font-sans text-1C6FB font-bold'>lAWYER BASMATH COURT</p>
                        <p className='font-sans text-1C6FB font-bold'> Maharashtra</p>
                      
                       
                      
                    </div>
                </div>
                 <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={ped}/>
                        </div>
                        <p className='font-sans text-1C6FB font-bold mt-4'>MR.NITIN PEDGAOKAR</p>
                        <p className='font-sans text-1C6FB font-bold'>OJAS LMC P.R.O</p>
                        <p className='font-sans text-1C6FB font-bold'> Parbhani</p>
                        <p className='font-sans text-1C6FB font-bold'>Maharashtra</p>
                     
                    
                    </div>
                </div> 
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={gutay}/>
                        </div>
                        <p className='font-sans text-1C6FB font-bold mt-4'>MR. SHRINIVAS GUTTE (SDK DEVELOPER SILICON, HYDERABAD)</p>
                        <p className='font-sans text-1C6FB font-bold'> LMC OJAS PROJECT MANAGER</p>
                        <p className='font-sans text-1C6FB font-bold'> Maharashtra</p>
                       
                     
                     
                    </div>
                </div>
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={ADVSIR}/>
                        </div>
                        <p className='font-sans text-1C6FB font-bold mt-4'>MR. SANTOSH DADKE GUTTE </p>
                        <p className='font-sans text-1C6FB font-bold'> LMC OJAS ADVISOR</p>
                        <p className='font-sans text-1C6FB font-bold'> Maharashtra</p>
                       
                     
                     
                    </div>
                </div>
     
               
            </div>
            {/* <div className='main-cards'>
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={ADV}/>
                        </div>
                        <p>ADV.SHAIKH MOHSIN</p>
                        <p>lAWYER BASMATH COURT</p>
                        <p>Maharashtra</p>
                    </div>
                </div>
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={ped}/>
                        </div>
                        <p>MR.NITIN PEDGAOKAR <br></br> OJAS LMC P.R.O</p>
                        <p>Parbhani</p>
                        <p>Maharashtra</p>
                    </div>
                </div> <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={gutay}/>
                        </div>
                        <p>MR. SHRINIVAS GUTTE (SDK DEVELOPER SILICON, HYDERABAD) LMC OJAS PROJECT MANAGER</p>
                     
                        <p>Maharashtra</p>
                    </div>
                </div> 
            </div>
            <div className='main-cards'>
             
           
            </div> */}
            <div className='bottom-heading'>
                <p>want to donate to a NGO?</p>
                <button>Donate</button>
            </div>

        </div>
    )
}

export default ManagementTeam;