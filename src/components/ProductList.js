import products from '../data/productData';
import ProductListItem from './ProductListItem';

console.log(products);

const ProductList = () => {
    return (
        <section className="grid_list">
            {products.map((elt) => {
                return (
                    <ProductListItem
                        data={elt}
                        key={elt.id}
                        id={elt.id}
                    />
                )
            })
            }
        </section>
    );
}

export default ProductList;