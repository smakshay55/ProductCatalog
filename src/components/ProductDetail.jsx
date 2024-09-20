
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productLoader } from '../loaders/loader';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await productLoader(productId);
            setProduct(productData);
            setLoading(false);
        };
        fetchProduct();
    }, [productId]);

    if (loading) return <p className="text-center">Loading...</p>;
    if (!product) return <p className="text-center">Product not found.</p>;

    return (
        <div className="container mt-4">
            <h2>{product.title}</h2>
            <p>{product.body}</p>
        </div>
    );
};

export default ProductDetail;
