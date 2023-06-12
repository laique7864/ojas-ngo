import React from 'react'
import './verfied.css'
import { useNavigate } from 'react-router-dom'
import { getMemberVerified } from '../../services/admin.service'
const VerfiedMember = () => {
    const [dataRow, setDataRow] = React.useState([])

    const navigate = useNavigate()
    const fetchData = async () => {
        const data = await getMemberVerified()
        console.log(data,'data')
        setDataRow(data.data.Events);
    }
    React.useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="container flex items-center flex-col p-8 mt-4">
                <div>
                    <h3 className='text-1C6FB font-sans text-3xl font-bold'>Verified Members</h3>
                </div>

                <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 ">
                        <div className='sub-main-cards'>
                            <div className='card-1'>
                                <div className='profile'>
                                </div>
                                <p className='font-sans text-1C6FB font-bold mt-4'>MR. SANTOSH DADKE GUTTE </p>
                                <p className='font-sans text-1C6FB font-bold'> LMC OJAS ADVISOR</p>
                                <p className='font-sans text-1C6FB font-bold'> Maharashtra</p>

                            </div>
                        </div>
                        
                 
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