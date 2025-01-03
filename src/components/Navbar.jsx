import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white py-4 shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center relative">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center rounded-lg font-bold text-xl">
                        E
                    </div>
                    <span className="text-xl font-bold text-gray-900">EcomShop</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/products" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                        Produk
                    </Link>                    
                    <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                        About
                    </Link>                    
                    <Link to="/login" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Links */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden shadow-lg">
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            <Link to="/about" className="block text-gray-600 hover:text-purple-600 transition-colors duration-300 py-2">
                                About
                            </Link>
                            <Link to="/products" className="block text-gray-600 hover:text-purple-600 transition-colors duration-300 py-2">
                                Produk
                            </Link>
                            <Link to="/login" className="block text-gray-600 hover:text-purple-600 transition-colors duration-300 py-2">
                                Login
                            </Link>
                            <Link
                                to="/sign-up"
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg block text-center hover:bg-purple-700 transition-colors duration-300"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;