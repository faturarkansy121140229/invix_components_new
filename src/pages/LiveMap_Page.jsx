import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import trukImage from '/images/truk.svg'; // Pastikan path ini benar
import mobilImage from '/images/mobil.svg'; // Pastikan path ini benar

// Custom icon for the truk marker
const trukIcon = new L.Icon({
    iconUrl: trukImage,
    iconSize: [80, 80],
    iconAnchor: [30, 60],
    popupAnchor: [0, -60],
});

// Custom icon for the mobil marker
const mobilIcon = new L.Icon({
    iconUrl: mobilImage,
    iconSize: [80, 80],
    iconAnchor: [30, 60],
    popupAnchor: [0, -60],
});

const LiveMap = () => {
    return (
        <div className="h-screen w-full p-5"> {/* Menggunakan Tailwind untuk padding */}
            <MapContainer center={[-5.429, 105.261]} zoom={13} className="h-full w-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> DIKEDO GPS'
                />
                <Marker position={[-5.429, 105.261]} icon={trukIcon}>
                    <Popup>
                        <div className="w-48 font-sans">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-blue-600">Mobil A</h2>
                                <p className="text-xs text-gray-600 font-bold">1 Menit lalu</p>
                            </div>
                            <hr className="border-gray-300 my-2" />

                            <div className="flex justify-around space-x-2 my-2">
                                <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <img src="/images/call-button.svg" alt="Call" className="w-12" />
                                </button>
                                <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <img src="/images/off-button.svg" alt="Alert" className="w-12" />
                                </button>
                                <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <img src="/images/reload-button.svg" alt="Power" className="w-12" />
                                </button>
                            </div>
                            <hr className="border-gray-300 my-2" />

                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span>Status:</span>
                                    <span className="text-red-600">UNKNOWN</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Ignition:</span>
                                    <span className="text-red-600">OFF</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Battery:</span>
                                    <span className="text-green-600">100%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Movement:</span>
                                    <span className="text-orange-600">PARK</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Speed:</span>
                                    <span className="text-green-600">0 KM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Course:</span>
                                    <span className="text-green-600">95°</span>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                <Marker position={[-5.384600, 105.260833]} icon={mobilIcon}>
                    <Popup>
                        <div className="w-48 font-sans">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-blue-600">Mobil A</h2>
                                <p className="text-xs text-gray-600 font-bold">1 Menit lalu</p>
                            </div>
                            <hr className="border-gray-300 my-2" />

                            <div className="flex justify-around space-x-2 my-2">
                                <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <img src="/images/call-button.svg" alt="Call" className="w-12" />
                                </button>
                                <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <img src="/images/off-button.svg" alt="Alert" className="w-12" />
                                </button>
                                <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <img src="/images/reload-button.svg" alt="Power" className="w-12" />
                                </button>
                            </div>
                            <hr className="border-gray-300 my-2" />

                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span>Status:</span>
                                    <span className="text-red-600">UNKNOWN</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Ignition:</span>
                                    <span className="text-red-600">OFF</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Battery:</span>
                                    <span className="text-green-600">100%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Movement:</span>
                                    <span className="text-orange-600">PARK</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Speed:</span>
                                    <span className="text-green-600">0 KM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Course:</span>
                                    <span className="text-green-600">95°</span>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                <Marker position={[-5.364400, 105.312833]} icon={mobilIcon}>
                    <Popup>
                        <div className="w-48 font-sans">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-blue-600">Mobil A</h2>
                                <p className="text-xs text-gray-600 font-bold">1 Menit lalu</p>
                            </div>
                            <hr className="border-gray-300 my-2" />

                            <div className="flex justify-around space-x-2 my-2">
                                <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <img src="/images/call-button.svg" alt="Call" className="w-12" />
                                </button>
                                <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <img src="/images/off-button.svg" alt="Alert" className="w-12" />
                                </button>
                                <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <img src="/images/reload-button.svg" alt="Power" className="w-12" />
                                </button>
                            </div>
                            <hr className="border-gray-300 my-2" />

                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span>Status:</span>
                                    <span className="text-red-600">UNKNOWN</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Ignition:</span>
                                    <span className="text-red-600">OFF</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Battery:</span>
                                    <span className="text-green-600">100%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Movement:</span>
                                    <span className="text-orange-600">PARK</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Speed:</span>
                                    <span className="text-green-600">0 KM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Course:</span>
                                    <span className="text-green-600">95°</span>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LiveMap;
