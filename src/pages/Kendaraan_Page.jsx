import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Button, Table } from "flowbite-react";
import { DataTable } from "simple-datatables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus } from "@fortawesome/free-solid-svg-icons";

import { API_URL } from "../utils/constants";
import AddVehicle from "../components/AddVehicle";

export default function Kendaraan() {
    const [vehicles, setVehicles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(API_URL + "vehicles")
            .then((res) => {
                const vehicles = res.data;
                setVehicles(vehicles);
                initializeDataTable();
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }, []);

    const initializeDataTable = () => {
        setTimeout(() => {
            if (
                document.getElementById("search-table") &&
                typeof DataTable !== "undefined"
            ) {
                const dataTable = new DataTable("#search-table", {
                    searchable: false,
                    sortable: false,
                    scrollx: true,
                    responsive: true,
                    perPage: 5,
                });
            }
        }, 0);
    };

    return (
        <div className="w-[85vw] lg:w-full min-h-full border-2 p-3">
            <h3 className="title text-gray-600 text-center text-lg my-3 lg:my-6 font-semibold border-b-2 border-orange-400 flex justify-center">
                <strong>KENDARAAN</strong>
            </h3>
            <div className=" mb-3 lg:mb-6">
                <AddVehicle className="" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {vehicles.map((vehicle) => (
                    <div
                        key={vehicle.index}
                        className="p-2 bg-white rounded-lg border border-gray-300"
                    >
                        <div className="grid grid-cols-3 gap-3 mb-2">
                            <div className="flex flex-col h-full justify-between item">
                                <img
                                    src={vehicle.image}
                                    alt="Gambar Kendaraan"
                                    className="mx-auto w-24 lg:w-30 mb-2 mt-3 lg:mt-0"
                                />
                                {vehicle.subscription.status === "Active" ? (
                                    <div className="bg-green-500 p-1 mt-2 rounded-xl">
                                        <p className="text-center text-white font-semibold text-xs lg:text-base">
                                            Active
                                        </p>
                                    </div>
                                ) : (
                                    <Link
                                        to={`/kendaraan/${vehicle.id}/aktivasi`}
                                        className="bg-red-600 hover:bg-red-800 p-1 mt-2 rounded-xl"
                                    >
                                        <p className="text-center text-white font-semibold text-xs lg:text-base">
                                            Unactive <FontAwesomeIcon icon={faPlus} />
                                        </p>
                                    </Link>
                                )}
                            </div>
                            <div className="col-span-2 flex flex-col justify-between min-h-full">
                                <div className="flex items-center text-xs lg:text-base ml-3">
                                    <p className="material-icons">{vehicle.no_kendaraan}</p>
                                </div>
                                <div className="flex items-center text-xs lg:text-base text-gray-600 ml-3">
                                    <p className="material-icons text-gray-500">
                                        Device: {vehicle.id_perangkat}
                                    </p>
                                </div>
                                <div className="flex items-center text-xs lg:text-base text-gray-600 ml-3">
                                    <p className="material-icons text-gray-500">
                                        Driver : {vehicle.driver}
                                    </p>
                                </div>
                                <div className="flex items-center text-xs lg:text-base text-gray-600 ml-3">
                                    <p className="material-icons text-gray-500">
                                        Ex Service : Jan 1, 2025
                                    </p>
                                </div>
                                <div className="flex items-center justify-between text-gray-500 text-xs lg:text-base ml-3">
                                    <p>Update : Oct 2, 2024 16:18</p>
                                </div>
                            </div>
                        </div>
                        <Link
                            to={`/kendaraan/${vehicle.id}`}
                            className="mt-4 p-2 bg-green-300 rounded-xl border border-gray-300 flex items-center justify-center"
                        >
                            <p className="text-xs lg:text-base text-green-600 font-semibold">
                                Lihat Detail <FontAwesomeIcon icon={faList} />
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}