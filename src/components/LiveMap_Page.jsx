// LiveMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import trukImage from '/images/truk.png'; // Ensure this path is correct
import mobilImage from '/images/mobil.png'; // Ensure this path is correct

// Custom icon for the motor marker
const trukIcon = new L.Icon({
    iconUrl: trukImage,
    iconSize: [80, 80],       // Increase size for better visibility
    iconAnchor: [30, 60],     // Adjust anchor point to keep the bottom center of the icon at the marker position
    popupAnchor: [0, -60],
});

// Custom icon for the mobil marker
const mobilIcon = new L.Icon({
    iconUrl: mobilImage,
    iconSize: [80, 80],       // Increase size for better visibility
    iconAnchor: [30, 60],     // Adjust anchor point to keep the bottom center of the icon at the marker position
    popupAnchor: [0, -60],
});

const LiveMap = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <MapContainer center={[-5.429, 105.261]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[-5.429, 105.261]} icon={trukIcon}>
                    <Popup>
                        <div className="w-48 font-sans space-y-3">
                            {/* Top container for name, time, and buttons */}
                            <div className="flex justify-between mb-2">
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-bold text-blue-600">Mobil A</h2>
                                    <p className="text-xs text-gray-600 font-bold leading-tight">1 Menit lalu</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="bg-transparent border-none cursor-pointer">
                                        <img src="/images/call-icon.png" alt="Call" className="w-7" />
                                    </button>
                                    <button className="bg-transparent border-none cursor-pointer">
                                        <img src="/images/off-icon.png" alt="Alert" className="w-7" />
                                    </button>
                                    <button className="bg-transparent border-none cursor-pointer">
                                        <img src="/images/reload-icon.png" alt="Power" className="w-7" />
                                    </button>
                                </div>
                            </div>

                            {/* Bottom container for status information */}
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
                {/* Additional markers go here */}
                <Marker position={[-5.384600, 105.260833]} icon={mobilIcon}>
                    <Popup>
                        <div className="w-48 font-sans space-y-3">
                            {/* Top container for name, time, and buttons */}
                            <div className="flex justify-between mb-2">
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-bold text-blue-600">Mobil A</h2>
                                    <p className="text-xs text-gray-600 font-bold leading-tight">1 Menit lalu</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="bg-transparent border-none cursor-pointer">
                                        <img src="/images/call-icon.png" alt="Call" className="w-7" />
                                    </button>
                                    <button className="bg-transparent border-none cursor-pointer">
                                        <img src="/images/off-icon.png" alt="Alert" className="w-7" />
                                    </button>
                                    <button className="bg-transparent border-none cursor-pointer">
                                        <img src="/images/reload-icon.png" alt="Power" className="w-7" />
                                    </button>
                                </div>
                            </div>

                            {/* Bottom container for status information */}
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
                        <div className="w-48 font-sans space-y-3">
                            {/* Top container for name, time, and buttons */}
                            <div className="flex justify-between mb-2">
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-bold text-blue-600">Mobil A</h2>
                                    <p className="text-xs text-gray-600 font-bold leading-tight">1 Menit lalu</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="bg-transparent border-none cursor-pointer">
                                        <img src="/images/call-icon.png" alt="Call" className="w-7" />
                                    </button>
                                    <button className="bg-transparent border-none cursor-pointer">
                                        <img src="/images/off-icon.png" alt="Alert" className="w-7" />
                                    </button>
                                    <button className="bg-transparent border-none cursor-pointer">
                                        <img src="/images/reload-icon.png" alt="Power" className="w-7" />
                                    </button>
                                </div>
                            </div>

                            {/* Bottom container for status information */}
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
