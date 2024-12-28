const Payment = () => {
    return (
        <div className="p-4 flex flex-col gap-4 mt-1">
            {/* Top: Checkout Steps */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
                {/* Row 1: Icons and Connectors */}
                <div className="flex justify-center items-center gap-4">
                    {/* Step 1: Make Transaction */}
                    <div className="flex items-center">
                        <span className="w-6 h-6 flex items-center justify-center rounded-md bg-green-500 text-white font-bold text-xs">
                            ✓
                        </span>
                        <div className="w-28 h-1 bg-green-500 mx-2"></div>
                    </div>

                    {/* Step 2: Payment */}
                    <div className="flex items-center">
                        <span className="w-6 h-6 flex items-center justify-center rounded-md bg-[#01B3FD] text-white font-bold text-xs">
                            2
                        </span>
                        <div className="w-28 h-1 bg-gray-500 mx-2"></div>
                    </div>

                    {/* Step 3: Invoices */}
                    <div className="flex items-center">
                        <span className="w-6 h-6 flex items-center justify-center rounded-md bg-gray-500 text-white font-bold text-xs">
                            3
                        </span>
                        <div className="w-28 h-1 bg-gray-500 mx-2"></div>
                    </div>

                    {/* Step 4: Complete */}
                    <div className="flex items-center">
                        <span className="w-6 h-6 flex items-center justify-center rounded-md bg-gray-500 text-white font-bold text-xs">
                            4
                        </span>
                    </div>
                </div>

                {/* Row 2: Descriptions */}
                <div className="flex justify-center items-center gap-16 mt-2">
                    {/* Step 1 Description */}
                    <span className="font-medium text-sm lg:text-base text-green-500 text-center">
                        Transaksi dibuat
                    </span>

                    {/* Step 2 Description */}
                    <span className="font-medium text-sm lg:text-base text-[#01B3FD] text-center">
                        Pembayaran
                    </span>

                    {/* Step 3 Description */}
                    <span className="font-medium text-sm lg:text-base text-gray-500 text-center">
                        Sedang di proses
                    </span>

                    {/* Step 4 Description */}
                    <span className="font-medium text-sm lg:text-base text-gray-500 text-center">
                        Transaksi Selesai
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Payment;
