import React from 'react';

const About = () => {
    return (
        <div className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* About Section */}
                <section className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
                        About EcomShop
                    </h1>
                    <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
                        <p className="text-gray-700 mb-4 leading-relaxed text-base">
                            EcomShop adalah platform modern yang dirancang untuk membantu Anda menemukan dan menjelajahi berbagai macam produk dari berbagai kategori. Misi kami adalah menyediakan pengalaman berbelanja yang mudah dan intuitif.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-base">
                            Kami mengumpulkan produk dari sumber tepercaya, menawarkan Anda tampilan komprehensif dari berbagai item terbaru dan paling inovatif di berbagai domain.
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-6">
                        Our Story
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                        <p className="text-gray-700 mb-4 leading-relaxed text-base">
                        Didirikan pada tahun 2020, EcomShop dimulai dengan ide sederhana: membuat penemuan produk lebih mudah dan lebih menyenangkan. Kami percaya dalam menghubungkan orang-orang dengan produk yang dapat meningkatkan kehidupan mereka.
                        </p>
                    </div>
                </section>

                {/* Contact Information */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-6">
                        Contact Us
                    </h2>
                    <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-lg md:text-xl mb-4">Customer Support</h3>
                                <p className="text-gray-700 mb-2 text-base">
                                    <strong>Email:</strong> ecomShop@gmail.com
                                </p>
                                <p className="text-gray-700 mb-2 text-base">
                                    <strong>Phone:</strong> +62 822-6742-9797
                                </p>
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-lg md:text-xl mb-4">Office Address</h3>
                                <address className="text-gray-700 not-italic text-base">
                                    EcomShop HQ<br />
                                    Aceh, Indonesia<br />
                                    Gedung Perkantoran Modern<br />
                                    Jl. Teknologi Informasi No. 123
                                </address>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="mt-8 bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl md:text-2xl font-semibold text-purple-700 mb-6 text-center md:text-left">
                                Send Us a Message
                            </h3>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
        </div>
    );
};

export default About;