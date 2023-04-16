import logo from '../images/Logo.png';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className='navBar_flex'>
            <img src={logo} alt="Logo" />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/products'>Products</Link>
            </nav>
        </header>
    );
}

export default NavBar;