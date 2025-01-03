import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-gray-900 block">Quality & Affordable</span>
                            <span className="bg-purple-600 text-white px-4 py-2 inline-block mt-2 rounded-lg text-2xl md:text-4xl lg:text-5xl">
                                Products Near You.
                            </span>
                        </h1>
                        <p className="text-gray-600 mb-8 text-base md:text-lg max-w-md mx-auto md:mx-0">
                            Temukan berbagai produk favorit dengan mudah dan nyaman hanya di sini.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <Link
                                to="/products"
                                className="bg-purple-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 text-sm md:text-base"
                            >
                                Order Now
                            </Link>                            
                        </div>
                    </div>
                    <div className="relative order-first md:order-last">
                        <img 
                            src="https://blogunik.com/wp-content/uploads/2018/02/trend-fashion-baju-kerja.jpg"
                            alt="Delicious meals"
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                        <div className="hidden md:block absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-full z-0"></div>
                    </div>
                </div>
            </div>

            {/* History Section */}
            <div className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="relative">
                            <img 
                                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/104/MTA-139516637/no_brand_fbt_baju_atasan_wanita_lengan_panjang_devanca_shirt_blouse_crinkle_airflow_busui_friendly_blouse_korean_style_remaja_kekinian_full02_lfu1qo9r.jpg"
                                alt="Restaurant dish"
                                className="rounded-lg shadow-xl w-full h-auto object-cover"
                            />
                            <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full z-0"></div>
                        </div>
                        <div className="text-center md:text-left">
                            <span className="text-purple-600 font-semibold text-sm md:text-base">Serving You Since 2020</span>
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mt-4 mb-6 flex flex-col md:flex-row items-center justify-center md:justify-start">
                                <span>We've been serving for</span>
                                <span className="bg-purple-600 text-white px-4 py-1 ml-0 md:ml-2 mt-2 md:mt-0 inline-block rounded-lg text-base md:text-lg">
                                    over 5 years.
                                </span>
                            </h2>
                            <p className="text-gray-600 mb-4 text-base md:text-lg max-w-md mx-auto md:mx-0">
                                Nikmati pengalaman belanja terbaik dengan produk berkualitas dan layanan terpercaya.
                            </p>                            
                            <div className="flex justify-center md:justify-start">
                                <Link
                                    to="/products"
                                    className="bg-purple-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 text-sm md:text-base"
                                >
                                    Latest Offers
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;