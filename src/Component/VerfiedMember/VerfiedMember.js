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
                {dataRow.length > 0 && dataRow.map((item)=>(
        <div class="w-52 max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={item?.profile} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-800">{item?.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{item.state}</span>
    
    </div>
</div>
      )

      )

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