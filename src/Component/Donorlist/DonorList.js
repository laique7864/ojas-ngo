import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getDonorAll } from '../../services/admin.service'

const DonorList = () => {
  const [dataRow, setDataRow] = React.useState([])

  const navigate = useNavigate()
  const fetchData = async () => {
    const data = await getDonorAll()
    console.log(data,"Fetching data");
    setDataRow(data.data.Events);


    
}
React.useEffect(() => {
  fetchData()
}, [])
  return (
    <>

      <div className="flex items-center flex-col p-8 mt-4">
        <div>
          <h3 className='text-1C6FB font-sans text-3xl font-bold'>Donor's list</h3>
        </div>

        <div class="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 ">
         
      {dataRow.length > 1 && dataRow.map((item)=>(
        <div class="w-44 md:w-52 max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
    <div class="flex justify-end px-4 pt-2">
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={item?.image} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-800">{item?.name}</h5>
    
    </div>
</div>
      )

      )

      }    

        </div>

        <div className='bottom-heading'>
          <p>want to donate to a NGO?</p>
          <button onClick={()=> navigate("/DonationForm")}>Donate</button>
        </div>




        {/* junaid khan convert css in tailwind */}


        {/* <div>
        <h3 className=" text-center text-sky-600 font-mono">volunteers</h3>
      </div>
      <div className="flex justify-evenly mt-16">
        <div className=" border-sky-400 border-2 rounded-lg border-box ">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5 ">
            <div className=" border-2  border-sky-500  mt-8 rounded-full h-24 w-24 ml-16  bg-black ">
        
            </div>
          <br></br>
          <div  className='mt-10'>
          <p>Raju Shete</p>
            <p>Volunteer : OJAS009</p>
            <p>PBN MAHARASHTRA</p>
          </div>
           
          </div>
        </div>
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className=" border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16  bg-black ">
        
            </div>
            <div className='mt-16'>
            <p>Baban Bhopale</p>
            <p>Volunteer : OJAS010</p>
            <p>PBN MAHARASHTRA</p>
            </div>
           
          </div>
        </div>{" "}
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16  bg-black ">
             
            </div>
            <div  className='mt-16'>
            <p>Gaurav Dahale</p>
            <p>Volunteer : OJAS011</p>
            <p>Jalna MAHARASHTRA</p>
            </div>

           
           
          </div>
        </div>{" "}
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16  bg-black ">
        
            </div>
            <div  className='mt-16'>
            <p>Keshav kanhe</p>
            <p>Volunteer: OJAS012</p>
            <p>Jintur MAHARASHTRA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-16">
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16  bg-black ">
           
            </div>
            <div  className='mt-16'>
            <p>Narayan Mishra</p>
            <p>Volunteer : OJAS013</p>
            <p>Delhi UTTARPRADESH</p>
            </div>
          </div>
        </div>
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16  bg-black ">
      
            </div>
            <div  className='mt-16'>
            <p>Ku. Gayatri Kanbale</p>
            <p>Volunteer : OJAS014</p>
            <p>Purna MAHARASHTRA</p>
            </div>
          </div>
        </div>{" "}
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16  bg-black ">
        
            </div>
            <div  className='mt-16'>
            <p>Ku.Akanksha Dhone</p>
            <p>Volunteer : OJAS015</p>
            <p>Purna MAHARASHTRA</p>
            </div>
          </div>
        </div>{" "}
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16  bg-black ">
         
            </div>
            <div  className='mt-16'>
            <p>Ajim Kaji</p>
            <p>Volunteer : OJAS016</p>
            <p>PBN MAHARASHTRA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-16">
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16 bg-sky-500/100  ">
            
            </div>
       
          </div>
        </div>
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16 bg-sky-500/100  ">
           
            </div>
           
          </div>
        </div>{" "}
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16 bg-sky-500/100  ">
           
            </div>
          
          </div>
        </div>{" "}
        <div className="sub-main-cards border-sky-400 border-2 rounded-lg">
          <div className="card-1 text-center h-64 w-64 left-520 top-80 ml-5">
            <div className="border-2 border-sky-500 mt-8 rounded-full h-24 w-24 ml-16 bg-sky-500/100  ">
           
            </div>
         
          </div>
        </div>
      </div>
     
      <br />
      <br />
      <div className="bottom-heading text-center">
        <p className="text-xl not-italic font-light">
          want to donate to a NGO?
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Donate
        </button>
      </div> */}
      </div>
    </>
  )
}

export default DonorList