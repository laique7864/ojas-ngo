import React from 'react'
import img from '../images/burgurbtn.png'
import './company.css'

function CompanyProfile() {
    return (
        <>
            <div className='main-heder'>
                <img src={img} alt='' />
                <h2>Company Profile</h2>
            </div>
            <div className='main-borer'>

                <div className='input-section'>
                    <label style={{ color: '#025FB5' }}>Brand Name* :</label>
                    <input type='text' style={{ width: '20rem' }} />

                    <label style={{ color: '#025FB5' }}>Email* :</label>
                    <input type='text' style={{ width: '20rem' }} />
                </div>

                <div className='line'> </div>

                <div className='input-section2'>
                    <label style={{ color: '#025FB5' }}>Website* :</label>
                    <input type='text' style={{ width: '20rem', position: 'relative', left: '8.5rem' }} />

                    <label style={{ color: '#025FB5', position: 'relative', left: '14.6rem' }}>Facebook Link* :</label>
                    <input type='text' style={{ width: '20rem', position: 'relative', left: '17.4rem' }} />
                </div>

                <div className='line2'> </div>

                <div className='input-section3'>
                    <label style={{ color: '#025FB5' }}>Twitter Link :</label>
                    <input type='text' style={{ width: '20rem',position:'relative',left:'7.4rem' }} />

                    <label style={{ color: '#025FB5',position:'relative',left:'13.6rem' }}>Instagram Link* :</label>
                    <input type='text' style={{ width: '20rem',position:'relative',left:'16.2rem' }} />
                </div>

                <div className='line3'></div>

                <div className='input-section4'>
                    <label style={{ color: '#025FB5' }}>Youtube Link * :</label>
                    <input type='text' style={{ width: '20rem',position:'relative',left:'6.1rem' }} />

                    <label style={{ color: '#025FB5',position:'relative',left:'12.5rem' }}>Whatsapp* :</label>
                    <input type='text' style={{ width: '20rem',position:'relative',left:'17rem' }} />
                </div>

                <div className='line4'></div>

                <div className='input-section5'>
                    <label style={{ color: '#025FB5' }}>Mobile No * :</label>
                    <input type='text' style={{ width: '20rem',position:'relative',left:'7.1rem' }} />

                    <label style={{ color: '#025FB5',position:'relative',left:'14rem' }}>Site Key* :</label>
                    <input type='text' style={{ width: '20rem',position:'relative',left:'19rem' }} />
                </div>

                <div className='line5'></div>

                <div className='text-area'>
                    <label style={{ color: '#025FB5' }}>Address * :</label>
                    <textarea style={{width:'56.5rem',position:'relative',left:'8rem',height:'4rem'}}> </textarea>
                </div>
                <div className='line6'></div>
                <div className='input-pin'>
                    <label style={{ color: '#025FB5' }}>Pin Code* :</label>
                    <input type='text' placeholder='Pin code' style={{position:'relative',left:'7.8rem',width:'15rem'}} />
                </div>
                <div className='line7'></div>
                <div className='about-text'>
                    <label style={{ color: '#025FB5',marginTop:'1rem' }}>About Us* :</label>
                    <textarea style={{width:'56.7rem',position:'relative',left:'7.8rem',height:'7rem'}}></textarea>
                </div>
                <div className='butan-div'>
                    <button>Submit</button>
                </div>
            </div>
        </>
    )
}

export default CompanyProfile