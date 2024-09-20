
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsLoader } from '../loaders/loader';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const productData = await productsLoader();
            setProducts(productData);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.body}</p>
                            <Link to={`/product/${product.id}`} className="btn btn-primary">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
