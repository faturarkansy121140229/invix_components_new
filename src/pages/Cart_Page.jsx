import React, { useContext, useState } from "react";
import { CartContext } from "../features/ContextProvider";
import CartProduct from "../components/CartProduct";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const [activeStep, setActiveStep] = useState(1); // Langkah aktif
    const [showQRISDropdown, setShowQRISDropdown] = useState(false); // State untuk dropdown QRIS

    return (
        <div className="p-4 flex flex-col gap-4 mt-1">
            {/* Left: Conditional Content */}
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
                    {activeStep === 1 ? (
                        <>
                            <h2 className="text-lg font-bold mb-4">My Cart</h2>
                            {/* Mapping the Cart Items */}
                            {cart.map((product, index) => (
                                <CartProduct key={index} product={product} />
                            ))}
                        </>
                    ) : (
                        <>
                            <h2 className="text-lg font-bold mb-4">Payment Methods</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 border rounded-lg cursor-pointer">
                                    <span>BCA Virtual Account</span>
                                    <span>→</span>
                                </div>
                                <div className="flex justify-between items-center p-4 border rounded-lg cursor-pointer">
                                    <span>Mandiri Virtual Account</span>
                                    <span>→</span>
                                </div>
                                <div className="flex justify-between items-center p-4 border rounded-lg cursor-pointer">
                                    <span>BNI Virtual Account</span>
                                    <span>→</span>
                                </div>
                                <div className="flex justify-between items-center p-4 border rounded-lg cursor-pointer">
                                    <span>Other Banks</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Right: Payment Summary */}
                <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <p>Sub Total</p>
                        <p>$2000 USD</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Discount (10%)</p>
                        <p>-$1000 USD</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Delivery Fee</p>
                        <p>$500 USD</p>
                    </div>
                    <div className="flex justify-between font-bold text-lg mb-4">
                        <p>Total</p>
                        <p>$1850 USD</p>
                    </div>

                    {/* Payment Options */}
                    <h3 className="text-md font-semibold mb-2">Pilih Metode Pembayaran</h3>
                    <div className="space-y-2 mb-4">
                        {/* QRIS Container */}
                        <div
                            className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
                            onClick={() => setShowQRISDropdown(!showQRISDropdown)}
                        >
                            <label htmlFor="qris" className="cursor-pointer font-semibold">
                                QRIS
                            </label>
                            <span className="text-gray-500">{showQRISDropdown ? "▲" : "▼"}</span>
                        </div>

                        {/* Dropdown Options (Container Terpisah) */}
                        {showQRISDropdown && (
                            <div className="flex flex-col space-y-2 pl-4">
                                <div className="p-2 bg-white rounded-lg border cursor-pointer hover:bg-gray-200">
                                    Dana
                                </div>
                                <div className="p-2 bg-white rounded-lg border cursor-pointer hover:bg-gray-200">
                                    ShopeePay
                                </div>
                                <div className="p-2 bg-white rounded-lg border cursor-pointer hover:bg-gray-200">
                                    LinkAja
                                </div>
                            </div>
                        )}

                        {/* E-Wallet */}
                        <div className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
                            <input type="radio" name="paymentMethod" id="ewallet" />
                            <label htmlFor="ewallet" className="cursor-pointer">E-Wallet</label>
                        </div>

                        {/* Transfer Bank */}
                        <div className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
                            <input type="radio" name="paymentMethod" id="bank" />
                            <label htmlFor="bank" className="cursor-pointer">Transfer Bank</label>
                        </div>
                    </div>

                    <input
                        type="text"
                        placeholder="Discount voucher"
                        className="w-full mb-4 p-2 border rounded-lg"
                    />
                    <button className="w-full bg-black text-white py-2 rounded-lg mb-2">
                        Apply
                    </button>
                    <button
                        className="w-full bg-orange-400 text-white py-2 rounded-lg"
                        onClick={() => setActiveStep(2)} // Ubah langkah ke Payment
                    >
                        Payment
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                        100-Day Limited Warranty <span className="text-orange-400">Details</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
