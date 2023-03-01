import React from 'react';

const Product = (props) => {
    const {name, seller, price, img, rating} = props.item;
    return (
        <div className='col-md-6 col-lg-4 g-4'>
            <div className="card p-2">
                <div className='w-50 mx-auto'>
                    <img src={img} className="card-img-top img-fluid" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name: {name.slice(0, 80)}...</h5>
                    <h5 className='d-block'>Price: ${price}</h5>
                    <p className="card-text py-2 d-flex justify-content-between align-items-center">
                        <span className='d-block'>Seller: {seller}</span>
                        <span className='d-block'>Ratings: {rating}Stars</span>
                    </p>
                    <button onClick={() => props.addCart(props.item)} href="/" className="btn btn-outline-primary w-100 py-2">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;