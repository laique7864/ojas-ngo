import React from 'react'
import './verfied.css'
import { useNavigate } from 'react-router-dom'
import { getMemberVerified } from '../../services/admin.service'
const VerfiedMember = () => {
    const [dataRow, setDataRow] = React.useState([])

    const navigate = useNavigate()
    const fetchData = async () => {
        const data = await getMemberVerified()
        console.log(data,'data');
        setDataRow(data.data.Events);
    }
    React.useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="flex items-center flex-col p-8 mt-4">
                <div>
                    <h3 className='text-1C6FB font-sans text-3xl font-bold'>Verified Members</h3>
                </div>


                <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 ">
                    {dataRow.length > 0 && dataRow.map((item)=>{
                        return (
                            <div className='sub-main-cards'>
                            <div className='card-1'>
                                <div className='profile'>
                                    <img src={item.profile}  className='rounded-full' alt='' style={{    height: "120px", width: "120px"}}/>
                                </div>
                                <p className='font-sans text-1C6FB font-bold mt-4'>{item.name} </p>
                                <p className='font-sans text-1C6FB font-bold'>{item.district}</p>
                                <p className='font-sans text-1C6FB font-bold'> {item.state}</p>

                            </div>
                        </div>
                        )
                    })

                    }
                       
                        
                 
                </div>

                <div className='bottom-heading'>
                    <p>want to donate to a NGO?</p>
                    <button onClick={() => navigate("/DonationForm")}>Donate</button>
                </div>





            </div>
        </>
    )
}

export default VerfiedMember