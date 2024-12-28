import React, { useState } from "react";
import Search from '../components/Search';

const Tagihan = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Dummy data
    const data = Array.from({ length: 100 }, (_, index) => ({
        tagihan: `172746462${index + 1}`,
        layanan: `Bronze`,
        jumlah: `16.500`,
        status: "PENDING",
        pembayaran: "Transfer-BNI",
        tanggalTagihan: "28 Sep 2024",
        tanggalLayanan: "29 Dec 2024",
    }));

    const totalRows = data.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const startRow = (currentPage - 1) * rowsPerPage;
    const endRow = startRow + rowsPerPage;
    const currentRows = data.slice(startRow, endRow);

    // Fungsi navigasi pagination
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const getPaginationRange = () => {
        const range = [];
        const delta = 1;
        const left = Math.max(1, currentPage - delta);
        const right = Math.min(totalPages, currentPage + delta);

        for (let i = left; i <= right; i++) {
            range.push(i);
        }

        if (left > 2) {
            range.unshift("...");
        }
        if (right < totalPages - 1) {
            range.push("...");
        }

        if (!range.includes(1)) range.unshift(1);
        if (!range.includes(totalPages)) range.push(totalPages);

        return range;
    };

    return (
        <>
            <div className="flex items-center mt-4 pl-4 w-full">
                <h5 className="text-base font-bold bg-white text-black dark:text-gray-400 py-1 px-2 shadow-md rounded-lg">
                    Tagihan
                </h5>
                <div className="flex-grow border-b-2 border-orange-400 ml-4"></div>
            </div>
            <div className="ml-4">
                <Search />
            </div>
            <div className="hidden md:block overflow-x-auto mb-4 mx-4 rounded-3xl shadow-lg">
                <table className="min-w-full table-auto text-sm text-gray-700">
                    <thead className="bg-white border-b-4 border-gray-200">
                        <tr>
                            <th className="text-left px-6 py-3 font-medium">TAGIHAN</th>
                            <th className="text-left px-6 py-3 font-medium">LAYANAN</th>
                            <th className="text-left px-6 py-3 font-medium">JUMLAH</th>
                            <th className="text-left px-6 py-3 font-medium">STATUS</th>
                            <th className="text-left px-6 py-3 font-medium">PEMBAYARAN</th>
                            <th className="text-center px-6 py-3 font-medium">#</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 space-y-2">
                        {currentRows.map((row, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-cyan-600">
                                    {row.tagihan} <br />
                                    <span className="text-orange-400">
                                        {row.tanggalTagihan}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {row.layanan} <br />
                                    <span className="text-orange-400">
                                        {row.tanggalLayanan}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{row.jumlah}</td>
                                <td className="px-6 py-4">
                                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{row.pembayaran}</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="bg-cyan-600 text-white px-3 py-1 rounded mr-2">
                                        BAYAR
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                                        BATAL
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="6" className="px-6 py-4 text-center bg-white">
                                <div className="flex justify-center items-center space-x-2">
                                    <button
                                        onClick={() => goToPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`flex items-center px-4 py-2 rounded-lg ${currentPage === 1
                                            ? "cursor-not-allowed text-gray-500"
                                            : "bg-transparent text-gray-700 hover:text-blue-500"
                                            }`}
                                    >
                                        ← Previous
                                    </button>
                                    {getPaginationRange().map((page, index) => (
                                        <button
                                            key={index}
                                            onClick={() => typeof page === "number" && goToPage(page)}
                                            className={`px-3 py-1 rounded-lg ${page === currentPage
                                                ? "bg-blue-100 text-cyan-600 font-bold underline"
                                                : "bg-transparent text-gray-700 hover:text-cyan-500"
                                                }`}
                                            disabled={page === "..."}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => goToPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`flex items-center px-4 py-2 rounded-lg ${currentPage === totalPages
                                            ? "cursor-not-allowed text-gray-500"
                                            : "bg-transparent text-gray-700 hover:text-cyan-500"
                                            }`}
                                    >
                                        Next →
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Kartu untuk layar kecil */}
            <div className="block md:hidden space-y-4 mx-4">
                {currentRows.map((row, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold text-blue-600">
                                    {row.tagihan}
                                </p>
                                <p className="text-sm text-orange-400">
                                    {row.tanggalTagihan}
                                </p>
                            </div>
                            <p className="font-medium">{row.jumlah}</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm">
                                <span className="font-medium">STATUS:</span>{" "}
                                <span
                                    className={`px-2 py-1 rounded-full text-xs ${row.status === "KONFIRMASI"
                                        ? "bg-blue-100 text-blue-600"
                                        : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {row.status}
                                </span>
                            </p>
                            <p className="text-sm mt-1">
                                <span className="font-medium">PEMBAYARAN:</span>{" "}
                                {row.pembayaran}
                            </p>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                BAYAR
                            </button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded">
                                BATAL
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tagihan;
