import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import logo_solo from '../images/Logo_solo.png'

const Products = () => {
    return (
        <div>
            <section className="headline_flex">
                <div className="hdl_links">
                    <img src={logo_solo} alt="Logo" />
                    <h3>What we have</h3>
                </div>
                <div className="linie">
                    <hr />
                </div>
                <h2 className="hdl_rechts">
                    PRODUCTS
                </h2>
            </section>

            <ProductList />

            <Footer />
        </div>
    );
}

export default Products;