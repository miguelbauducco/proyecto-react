import React from 'react'
import ig from '../multimedia/instagram.png'
import linkedin from '../multimedia/linkedin.png'
import fb from '../multimedia/facebook.png'
import '../styles/footer.css'

const Footer = () => {
return (
    <div className='container'>
        <div className='d-flex justify-content-center'>
        <p className='rights'>All rights reserved . 2022 .</p>
        </div>
        <div className='d-flex justify-content-center'>
        <img className='media' src={ig} alt='igphoto'/>
        <img className='media' src={linkedin} alt="linkedinphoto"/>
        <img className='media' src={fb} alt="fbphoto"/>
        </div>
    </div>
)
}

export default Footer