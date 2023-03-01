import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        console.log(product);
    }

    return (
        <>
            <div className="container py-4">
                <div className="row">
                    {/* all products */}
                    <div className="col-md-10">
                        <div className="container">
                            <div className="row">
                                {
                                    products.map((item) => <Product key={item.id} item={item} addCart={addToCart} />)
                                }
                            </div>
                        </div>
                    </div>
                    {/* side calculation */}
                    <div className="col-md-2">Summary</div>
                </div>
            </div>
        </>
    );
};

export default Shop;