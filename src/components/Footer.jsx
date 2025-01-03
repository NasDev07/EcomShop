import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-16">
            {/* Download App Section */}
            <div className="bg-gray-900 text-white py-12 md:py-20 mb-12 md:mb-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0 text-center md:text-left">
                            <p className="text-yellow-400 mb-2 text-sm md:text-base">Download App</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                                Orang di sekitar Anda memesan produk favorit
                                <br />
                                lewat aplikasi <span className="bg-white text-purple-600 px-2 rounded-full">EcomShop.</span>
                            </h2>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <button className="bg-white text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center space-x-2 text-sm md:text-base">
                                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
                                    </svg>
                                    <span>APP STORE</span>
                                </button>
                                <button className="bg-white text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center space-x-2 text-sm md:text-base">
                                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                    </svg>
                                    <span>GOOGLE PLAY</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-48 md:w-64 mt-8 md:mt-0">
                            <div className="bg-gray-800 p-2 rounded-3xl">
                                <div className="bg-white rounded-2xl aspect-[9/16] flex items-center justify-center">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 text-white flex items-center justify-center rounded-lg text-2xl md:text-3xl font-bold">
                                        E
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center rounded-lg mr-2">
                            E
                        </div>
                        <span className="text-gray-800 font-bold">EcomShop.</span>
                    </div>
                    <div className="text-gray-500 mb-4 md:mb-0">
                        © 2025 EcomShop. All Rights Reserved.
                    </div>
                    <div className="flex space-x-4 justify-center">
                        <a href="#" className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;