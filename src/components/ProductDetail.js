import logo_solo from '../images/Logo_solo.png';
import products from '../data/productData';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'

const ProductDetail = () => {
    const idParams = useParams();

    console.log(idParams);
    console.log(idParams.id);
    console.log(products);
    console.log(idParams.productName);//undefined
    console.log(products[0].productName);//Jenson

    const detailProduct = products.filter((elt) => {
        return elt.id.toString() === idParams.id
    })

    return (
        <section>
            <section className="headline_flex">
                <div className="hdl_links">
                    <img src={logo_solo} alt="Logo" />
                    <h3>{detailProduct[0].productName}</h3>
                </div>
                <div className="linie">
                    <hr />
                </div>
                <h2 className="hdl_rechts">
                    PRODUCTS
                </h2>
            </section>
            <section className='productDetail_content'>
                <div className='detail_content_links'>
                    <img src={detailProduct[0].img} alt="Produkt-Bild" className='content_links' />
                </div>
                <p className='detail_content_rechts'>{detailProduct[0].content}</p>
            </section>
            <Footer />
        </section>
    );
}

export default ProductDetail;