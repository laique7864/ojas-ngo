import React from 'react'
import './Manajment.css'
import MoinSir from '../../Navbarlogo/JK-MKS.png'
import Aruna from '../../Navbarlogo/JK-ARUNA.png'
import Nitin from '../../Navbarlogo/JK-SEJAL.png'
import Baba from '../../Navbarlogo/jk-baba.png'
import ADV from '../../Navbarlogo/JK-WAKIL.png'
import ped from '../../Navbarlogo/JK-NITIN.png'
import gutay from '../../Navbarlogo/JK-SHRINIVAS.png'






const ManagementTeam=()=> {
    return (
        <div className='container flex items-center flex-col p-8 gap-8'>
            <div>
                <h3 className='h3'>ManagementTeam</h3>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20  '>
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile '>
                            <img src={MoinSir}/>
                        </div>
                        <p className='text-black'>M.K. SHAIKH PRESIDENT (OJAS.B.U.S.B.S)</p>
                        <p className='text-black'>Parbhani</p>
                        <p className='text-black'>Maharashtra</p>
                    </div>
                </div>
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={Aruna}/>
                        </div>
                        <p>MISS. ARUNA MUNDHEOJAS LMC PRESIDENT</p>
                        <p>Parbhani</p>
                        <p>Maharashtra</p>
                    </div>
                </div> 
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={Nitin}/>
                        </div>
                        <p>KU.SEJAL G. MATRA (RESEARCHER NATIONAL CHEMICAL LAB, PUNE) OJAS LMC PROJECT-JOIN DIRECTOR</p>
                       
                    </div>
                </div> 
                <div className='sub-main-cards'>
                    <div className='card-1'>
                        <div className='profile'>
                            <img src={Baba}/>
                        </div>
                        <p>MR. BABA PATHAN
                            <br></br>(BJP STATE VICE-PRESIDENT MINORITY CELL) OJAS LMC SECRETARY</p>
                       
                    </div>
                </div>
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