import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />
            <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
        </div>
    );
};

export default ProductCard;
