import { Link } from "react-router-dom";

const ProductListItem = (props) => {
    // console.log(props);
    return (

        <section className="product_list_item" style={{
            backgroundImage: `url('${props.data.img}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <h2 className="productListItem_title">{props.data.productName}</h2>
            <Link to={`/products/${props.id}`}>Shop Now</Link>
        </section>

    );
}

export default ProductListItem;