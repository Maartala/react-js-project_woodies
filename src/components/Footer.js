import footer_img from '../images/Footer.png';
import logo from '../images/Logo.png';

const Footer = () => {
    return (
        <footer id='pos_relative'>
            <hr id='pos_absolute' />
            <div className="footer_flex">
                <article className='footer_info'>
                    <img src={logo} alt="Logo" />
                    <p>(012) 8967453</p>
                    <p>woodies@gmail.com</p>
                    <p>Jakarta, Indonesia
                    </p>
                </article>
                <p id='c2020'>© 2020 WOODIES</p>
                <div >
                    <img src={footer_img} alt="Tisch_Stuhl" id='footer_image' />
                </div>
            </div>
        </footer>
    );
}

export default Footer;

// style={{ backgroundImage: `url(${footer_img})` }}
// ======================================================



