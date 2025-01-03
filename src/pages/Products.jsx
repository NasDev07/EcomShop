import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');

    // Using Free API: https://fakestoreapi.com/products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setFilteredProducts(response.data);
                setIsLoading(false);
            } catch (err) {
                setError('Failed to fetch products');
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Filtering and Sorting functionality
    useEffect(() => {
        let results = products;

        // Filter by search term
        if (searchTerm) {
            results = results.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            results = results.filter(product =>
                product.category === selectedCategory
            );
        }

        // Sort products
        switch (sortBy) {
            case 'priceAsc':
                results.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                results.sort((a, b) => b.price - a.price);
                break;
            case 'nameAsc':
                results.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'nameDesc':
                results.sort((a, b) => b.title.localeCompare(a.title));
                break;
            default:
                // Default sorting (no change)
                break;
        }

        setFilteredProducts(results);
    }, [searchTerm, selectedCategory, sortBy, products]);

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Get unique categories
    const categories = ['all', ...new Set(products.map(product => product.category))];

    // Render loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
            </div>
        );
    }

    // Render error state
    if (error) {
        return (
            <div className="text-center text-red-500 mt-10">
                {error}
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12 bg-white">
            <div className="container mx-auto px-4 py-8">
                {/* Filter and Search Section */}
                <div className="mb-8 flex flex-col md:flex-row gap-4">
                    {/* Search Bar */}
                    <div className="flex-grow">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Category Filter */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category === 'all' ? 'All Categories' : category}
                            </option>
                        ))}
                    </select>

                    {/* Sort By */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="default">Default Sorting</option>
                        <option value="priceAsc">Price: Low to High</option>
                        <option value="priceDesc">Price: High to Low</option>
                        <option value="nameAsc">Name: A to Z</option>
                        <option value="nameDesc">Name: Z to A</option>
                    </select>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="max-h-full object-contain"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-4 flex-grow flex flex-col">
                                <h3 className="font-bold text-lg mb-2 truncate">
                                    {product.title}
                                </h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-600 font-semibold">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-gray-500 capitalize">
                                        {product.category}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="mt-auto">
                                    <div className="flex items-center mb-2">
                                        <span className="text-yellow-500 mr-2">★</span>
                                        <span className="text-sm text-gray-600">
                                            {product.rating.rate} ({product.rating.count} reviews)
                                        </span>
                                    </div>
                                    <button
                                        className="w-full bg-blue-600 text-white py-2 rounded-lg 
                                            hover:bg-blue-700 transition duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Products Found */}
                {filteredProducts.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">
                        No products found matching your search or filters.
                    </div>
                )}

                {/* Product Count */}
                <div className="text-center text-gray-500 mt-6">
                    Showing {filteredProducts.length} of {products.length} products
                </div>
            </div>
        </div>
    );
};

export default Products;