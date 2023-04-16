import img from '../images/Home.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home_start_flex">
            <section>
                <p>Are you looking for <span style={{ fontWeight: 'bold' }}> wooden <br /> furniture </span>for your place? </p>
                <h2>This is the <br /> Right Place</h2>
                <Link to='/products'>Explore Categories</Link>
            </section>
            <div >
                <img src={img} alt="Bild Tisch" className='img_home' />
            </div>

        </div >
    );
}

export default Home;
