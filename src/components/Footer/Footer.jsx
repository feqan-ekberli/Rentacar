import './Footer.scss'
import logo from '../../assets/darklogo.png'
import {FaInstagram, FaFacebook , FaWhatsapp} from 'react-icons/fa'

const Footer = () =>{
    return(
        <footer className='footer text-center'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src={logo} alt="" className='logo' />
                </div>
                <div className='footer-menu'>
                    <nav className='menu sm:flex '>
                        <a href="#">Əsas səhifə</a>
                        <a href="#">Haqqımızda</a>
                        <a href="#">Maşınlar</a>
                        
                        <a href="#">Əlaqə</a>
                    </nav>
                </div>
                <div className="footer-text">
                    <p>Şirkətimiz 2015-ci ildən etibarlı avtomobil icarəsi xidmətləri ilə fəaliyyət göstərir və müştərilərinə geniş avtomobil seçimi təqdim edir. Hava limanı və regionlara transfer, 24/7 dəstək xidmətləri ilə yüksək keyfiyyətli xidmət təmin edirik.</p>
                </div>

                <div className='social-box'>
                        <FaInstagram className='social-icon'/>
                        <FaFacebook className='social-icon'/>
                        <FaWhatsapp className='social-icon'/>
                    </div>
            </div>
        </footer>
    )
}
export default Footer