import Footer from "../components/Footer";
import logo_solo from '../images/Logo_solo.png';
import about from '../images/About.png'

const About = () => {
    return (
        <div>
            <section className="headline_flex">
                <div className="hdl_links">
                    <img src={logo_solo} alt="Logo" />
                    <h3>Who we are</h3>
                </div>
                <div className="linie">
                    <hr />
                </div>
                <h2 className="hdl_rechts">
                    ABOUT US
                </h2>
            </section>
            <section className="content_flex">
                <div className="content_links">
                    <img src={about} alt="Salat" />
                </div>
                <article className="content_rechts">
                    <h3>WOODIES <span>is the</span> home of modern wooden furniture</h3>
                    <p>the answer to your need for furniture <br /> with shapes, sizes and colors.</p>
                </article>
            </section>

            <Footer />
        </div>
    );
}

export default About;