import logo from '../../assets/whitelogo.png'
import  './Header.scss'
import React from 'react'
import {FaInstagram, FaFacebook , FaWhatsapp, FaPhoneAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <header className='header'>
            <div className='right-section  gradient-bg'>
                    <div className='contact-phone'>
                        <FaPhoneAlt/>
                        <span className='contact-number'>055 456 77 88</span>
                    </div>
                    <div className='social-box'>
                        <FaInstagram className='social-icon'/>
                        <FaFacebook className='social-icon'/>
                        <FaWhatsapp className='social-icon'/>
                    </div>
                </div>
            <div className='header-container '>
                <div className='left-section  '>
                    <img src={logo} alt="" className='logo'/>
                    <nav className='menu sm:flex '>
                        <Link to='/'>Əsas səhifə</Link>
                        <Link to='/masinlar'>Masinlar </Link>
                        <Link to='/haqqimizda'>Haqqimizda</Link>
                        <Link to='/elaqe'>Elaqe</Link>
                        <Link to='teklifler'>Teklifler</Link>
                    </nav>

                    <div>
                        <button className='gradient-bg btn' type="button">Elaqe</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header