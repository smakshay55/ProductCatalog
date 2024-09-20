// src/loaders/loader.jsx
export const productsLoader = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error loading products:', error);
        return [];
    }
};

export const productLoader = async (productId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
        if (!response.ok) throw new Error(`Failed to fetch product with ID: ${productId}`);
        const product = await response.json();
        return product;
    } catch (error) {
        console.error(`Error loading product ${productId}:`, error);
        return null;
    }
};
