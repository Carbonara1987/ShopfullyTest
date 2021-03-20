import React from 'react';
import styles from './Products.module.css';

function Product ({flyer}) {


    return <div className="card" >
        <div className="card-body">
            <h6 className="d-block">{flyer.retailer}</h6>
            <h5 className="productTitle" className="card-title">{flyer.title}</h5>
            <p className="card-text">
                <small className="text-uppercase">{flyer.category}</small>
            </p>
        </div>
    </div>





};


export default Product;
