import React from 'react'
import './Contain.css'
import img from '../../Navbarlogo/Ellipse 4.png'
const Contain = () => {

    return (
        <>
            <div className='Img'>
                <div className='Img-Text flex justify-center h-full items-center'>
                    <p className='text-4xl w-72 h-40 font-sans '>
                    Your small help
                    can light up
                    someone’s life 

                    </p>
                   
                </div>
            </div>
            <div>
                <h3 className='Main-Contain-text'>Upcoming Events</h3>
            </div>
            <div className='Main-Container-Box'>
                <div className='box1'></div>

                <div className='box2'></div>
                <div className='box3'></div>
                <div className='text'>

                </div>

            </div>
            <div className='text'>
                <p>Blood Donation Camp</p>
                <p>Books Distribution</p>
                <p>Career Guidance</p>
            </div>

            <div >
                <div className='Latest-Text'>
                    <h3>Latest Activity</h3>
                </div>
                <div className='Latest-Activety'>
                </div>
            </div>

            <div className='Main-Abouts'>
                <h3>About Us</h3>
            </div>
            <div className='Abouts-Main-contain'>
                <div>
                    <img src={img} className='Abouts-Img' />
                </div>
                <div  style={{marginTop:'4rem'}}>

                    <p> MainU.S. However, should an NGO wish to obtain legal benefits such as exemption from state </p>
                    <p>and federal taxes, it should incorporate and register as an NGO under the relevant laws of the state in which it's located.</p>
                    <p>  An NGO doesn't have to incorporate. For instance, to form a charitable NGO, all that's required </p>
                    <p> (as is for any charitable trust) is a legal contract and deed that conveys property.</p>
                    <p>While no federal government involvement comes into play, states in the U.S. </p>
                    <p> may require NGOs with religious, educational, or charitable missions that may ask for donations to register with a state charity.</p>
                </div>
            </div>
            <div>
                <h4>Our Objective</h4>
                <div>
                  <div className='Obj1'></div>
                  <div  className='Obj2'></div>
                  <div  className='Obj3'></div>
                  <div  className='Obj4'></div>
                  <div  className='Obj5'></div>
                </div>
            </div>
        </>
    )
}

export default Contain