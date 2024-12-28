import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { CartContext } from "../features/ContextProvider";
import productsData from "../components/DataProducts";
import servicesData from "../components/DataServices";

const ServiceCard = ({ title, price, features }) => {
    return (
        <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <h5 className="mb-4 text-lg font-medium text-gray-500 dark:text-gray-400">{title}</h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-xl font-semibold">Rp</span>
                <span className="text-3xl font-extrabold tracking-tight">{price}</span>
                <span className="ml-1 text-sm font-normal text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="my-7 space-y-5 text-sm">
                {features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} />
                ))}
            </ul>
            <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-xs font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            >
                Subscribe
            </button>
        </Card>
    );
};

const FeatureItem = ({ feature }) => {
    const { text, isCrossedOut } = feature;
    return (
        <li className={`flex space-x-3 ${isCrossedOut ? 'line-through decoration-gray-500' : ''}`}>
            <svg
                className={`h-5 w-5 shrink-0 ${isCrossedOut ? 'text-gray-400 dark:text-gray-500' : 'text-cyan-600 dark:text-cyan-500'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{text}</span>
        </li>
    );
};

const Services = () => {
    const { dispatch } = useContext(CartContext);
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const [visibleContent, setVisibleContent] = useState(
        productsData.map(() => true)
    );

    const toggleContent = (index) => {
        setVisibleContent((prevState) =>
            prevState.map((isVisible, i) => (i === index ? !isVisible : isVisible))
        );
    };

    const handleCartClick = () => {
        navigate("/Cart");
    };

    return (
        <div className="relative">
            {/* Cart Button */}
            <div className="fixed bg-white bottom-4 right-6 z-50 rounded-full p-0.5">
                <div
                    className="bg-white dark:bg-gray-800 shadow-inner rounded-full p-2 flex items-center justify-center cursor-pointer border-4 border-cyan-600"
                    onClick={handleCartClick}
                >
                    <img src="/images/cart.svg" alt="Cart" className="w-7 h-7" />
                    <span className="absolute right-[-5px] bottom-[40px] w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white">
                        {cart.length}
                    </span>
                </div>
            </div>

            <div className="justify-center mb-8 text-xl font-medium text-black dark:text-gray-400">
                {/* Services Section */}
                <div className="flex items-center mt-4 w-full">
                    <h5 className="text-base font-bold bg-white text-black dark:text-gray-400 py-1 px-2 ml-4 shadow-md rounded-lg">
                        Services
                    </h5>
                    <div className="flex-grow border-b-2 border-orange-400 ml-4"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-4 m-4">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            price={service.price}
                            features={service.features}
                        />
                    ))}
                </div>

                {/* Products Section */}
                <div className="justify-center mb-8 text-xl font-medium text-black dark:text-gray-400">
                    <div className="flex items-center mt-4 w-full">
                        <h5 className="text-base font-bold bg-white text-black dark:text-gray-400 py-1 px-2 ml-4 shadow-md rounded-lg">
                            Products
                        </h5>
                        <div className="flex-grow border-b-2 border-orange-400 ml-4"></div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center mt-4 m-4">
                        {productsData.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col h-[320px] w-full relative"
                            >
                                <div className="p-4 space-y-2 flex flex-col">
                                    <div className="rounded-lg relative">
                                        {/* Tampilkan gambar jika visibleContent[index] false, dan deskripsi jika true */}
                                        {visibleContent[index] ? (
                                            <>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-auto max-h-48 object-cover"
                                                />
                                                <div className="pl-1 pb-2 font-bold text-black text-xl">
                                                    {product.name} <br />
                                                    <span className="font-bold text-gray-600 text-base">
                                                        Rp. {product.price}
                                                    </span>
                                                </div>
                                                <button
                                                    className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-xs font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                                                    onClick={() => dispatch({ type: "Add", product: product })}
                                                >
                                                    Add to Cart +
                                                </button>
                                            </>
                                        ) : (
                                            <div className="text-gray-500 text-sm dark:text-gray-400">
                                                <div className="font-bold text-lg mb-2">Description</div>
                                                {product.description}
                                            </div>
                                        )}
                                        <img
                                            src="/images/info.svg"
                                            alt="Info"
                                            className="w-4 h-4 absolute top-[-2px] right-[-2px] cursor-pointer"
                                            onClick={() => toggleContent(index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
