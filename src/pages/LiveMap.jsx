import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import trukImage from "/images/truk.svg";
import mobilImage from "/images/mobil.svg";
import motorImage from "/images/motor.svg";
import "../assets/css/LiveMap.css";
import Search from "../components/Search";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import BatteryStatus from "../components/BatteryStatus";

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

const motorIcon = new L.Icon({
  iconUrl: motorImage,
  iconSize: [80, 80],
  iconAnchor: [30, 60],
  popupAnchor: [0, -60],
});

// Hook to update map view
const ChangeView = ({ targetLocation, zoomLevel }) => {
  const map = useMap();

  useEffect(() => {
    if (targetLocation) {
      map.setView(targetLocation, zoomLevel, {
        animate: true,
        duration: 0.5,
      });
    }
  }, [targetLocation, zoomLevel, map]);

  return null;
};

const LiveMap = () => {
  const mapRef = useRef();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(20);
  const [filters, setFilters] = useState({
    move: true,
    park: true,
    off: true,
    miss: true,
  });
  const [isContainerVisible, setIsContainerVisible] = useState(true);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const vehicleData = [
    {
      plate: "B 7777 ZZZ",
      lat: -5.3846,
      lon: 105.260833,
      jenis: "mobil",
      status: "move",
    },
    {
      plate: "BE 2929 ABA",
      lat: -5.3644,
      lon: 105.312833,
      jenis: "truk",
      status: "park",
    },
    {
      plate: "BE 4509 GA",
      lat: -5.429,
      lon: 105.261,
      jenis: "mobil",
      status: "miss",
    },
    {
      plate: "B 8910 YY",
      lat: -5.435,
      lon: 105.241,
      jenis: "truk",
      status: "off",
    },
    {
      plate: "BG 2354 QS",
      lat: -5.432,
      lon: 105.345,
      jenis: "motor",
      status: "move",
    },
  ];

  const filteredVehicles = vehicleData.filter((vehicle) => {
    if (Object.values(filters).every((value) => !value)) {
      return true;
    }
    return filters[vehicle.status];
  });

  const statusCounts = {
    move: vehicleData.filter((vehicle) => vehicle.status === "move").length,
    park: vehicleData.filter((vehicle) => vehicle.status === "park").length,
    off: vehicleData.filter((vehicle) => vehicle.status === "off").length,
    miss: vehicleData.filter((vehicle) => vehicle.status === "miss").length,
  };

  const handleContainerClick = (vehicle) => {
    setSelectedVehicle({ lat: vehicle.lat, lon: vehicle.lon });
    setZoomLevel(24);
  };

  const handleCheckboxChange = (status) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [status]: !prevFilters[status],
    }));
  };

  const handleToggle = () => {
    setIsContainerVisible((prevState) => !prevState);
    setIsArrowRotated(!isArrowRotated);
  };

  return (
    <div className="h-full w-full relative">
      <div
        className={`absolute inset-y-0 left-0 w-64 lg:w-[360px] z-10 bg-white bg-opacity-80 shadow-md my-5 p-4 rounded-tr-[10px] rounded-br-[10px] transition-all duration-500 ease-in-out ${
          isContainerVisible
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <h1 className="text-xl lg:text-2xl text-black font-bold">
          DIKEDO<span className="font-normal">GPS</span>
        </h1>
        <button
          onClick={handleToggle}
          className="absolute right-[-28px] lg:left-[360px] top-[20px] w-8 h-8 bg-white opacity-80 transform rounded-r-lg pl-1.5"
        >
          <img
            src="images/arrow.svg"
            alt="Arrow"
            className={`w-5 h-5 transition-transform duration-500 ${
              isArrowRotated ? "rotate-180" : ""
            }`}
          />
        </button>
        <p className="text-xs lg:text-sm font-semibold my-1 ml-1">
          Welcome, Fatur Arkan Syawalva
        </p>
        <Search />
        <div className="flex justify-between mb-4 bg-white border border-gray-300 py-2 px-3 rounded-lg">
          <div className="flex items-center mr-0">
            <input
              id="default-checkbox-1"
              type="checkbox"
              checked={filters.move}
              onChange={() => handleCheckboxChange("move")}
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="default-checkbox-1"
              className="ms-1 lg:ms-2 text-xs lg:text-sm font-medium text-green-500"
            >
              Move
            </label>
          </div>
          <div className="flex items-center mr-2">
            <input
              id="default-checkbox-2"
              type="checkbox"
              checked={filters.park}
              onChange={() => handleCheckboxChange("park")}
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="default-checkbox-2"
              className="ms-2 text-xs lg:text-sm font-medium text-yellow-300"
            >
              Park
            </label>
          </div>
          <div className="flex items-center mr-2">
            <input
              id="default-checkbox-3"
              type="checkbox"
              checked={filters.off}
              onChange={() => handleCheckboxChange("off")}
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="default-checkbox-3"
              className="ms-2 text-xs lg:text-sm font-medium text-red-600"
            >
              Off
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-checkbox-4"
              type="checkbox"
              checked={filters.miss}
              onChange={() => handleCheckboxChange("miss")}
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="default-checkbox-4"
              className="ms-2 text-xs lg:text-sm font-medium text-gray-400"
            >
              Miss
            </label>
          </div>
        </div>

        <div className="grid gap-4 h-[63vh] lg:h-[61vh] overflow-y-auto custom-scrollbar pr-2">
          {filteredVehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg border border-gray-300"
              onClick={() => handleContainerClick(vehicle)}
            >
              <div className="grid grid-cols-3 gap-3 mb-2">
                <div className="flex flex-col h-full justify-between item">
                  {vehicle.jenis === "mobil" ? (
                    <img
                      src="images/car.svg"
                      alt="Car"
                      className="mx-auto w-24 lg:w-30 mb-2 mt-3 lg:mt-0"
                    />
                  ) : vehicle.jenis === "truk" ? (
                    <img
                      src="images/truck.svg"
                      alt="Truck"
                      className="mx-auto w-24 lg:w-30 mb-2 mt-3 lg:mt-0"
                    />
                  ) : (
                    <img
                      src="images/motorcycle.svg"
                      alt="Motorcycle"
                      className="mx-auto w-24 lg:w-30 mb-2 mt-3 lg:mt-0"
                    />
                  )}
                  {vehicle.status === "move" ? (
                    <div className="bg-green-500 p-1 mt-2 rounded-xl">
                      <p className="text-center text-white font-semibold text-xs lg:text-base">
                        Move
                      </p>
                    </div>
                  ) : vehicle.status === "park" ? (
                    <div className="bg-yellow-300 p-1 mt-2 rounded-xl">
                      <p className="text-center text-white font-semibold text-xs lg:text-base">
                        Park
                      </p>
                    </div>
                  ) : vehicle.status === "off" ? (
                    <div className="bg-red-600 p-1 mt-2 rounded-xl">
                      <p className="text-center text-white font-semibold text-xs lg:text-base">
                        Off
                      </p>
                    </div>
                  ) : vehicle.status === "miss" ? (
                    <div className="bg-gray-400 p-1 mt-2 rounded-xl">
                      <p className="text-center text-white font-semibold">
                        Miss
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="col-span-2 flex flex-col justify-between min-h-full">
                  <div className="flex flex-col lg:flex-row items-center justify-between ml-3">
                    <span className="text-base lg:text-xl font-semibold">
                      {vehicle.plate}
                    </span>
                    <img
                      src="/images/battery.svg"
                      alt="Battery"
                      className="w-6 lg:w-8 mr-3"
                    />
                  </div>

                  <div className="flex items-center text-xs lg:text-base text-gray-600 ml-3">
                    <span className="material-icons text-gray-500">
                      Driver :
                    </span>
                    <span className="ml-1">Unknown</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-500 text-xs lg:text-base ml-3">
                    <span>Oct 2, 2024 16:18</span>
                  </div>
                  <hr className="border-gray-300 my-2" />
                  <div className="flex justify-around space-x-2  px-2">
                    <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                      <img
                        src="/images/call-button.svg"
                        alt="Call"
                        className="w-12"
                      />
                    </button>
                    <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                      <img
                        src="/images/off-button.svg"
                        alt="Alert"
                        className="w-12"
                      />
                    </button>
                    <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                      <img
                        src="/images/reload-button.svg"
                        alt="Power"
                        className="w-12"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-2 bg-green-300 rounded-xl border border-gray-300 flex items-center justify-center">
                <p className="text-xs lg:text-base text-green-600 font-semibold">
                  Show the Latest History
                </p>
                <img src="/images/eye.svg" alt="Eye" className="w-5 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <MapContainer
        center={[-5.5, 105.0]}
        zoom={10}
        className="h-full w-full z-0"
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ChangeView targetLocation={selectedVehicle} zoomLevel={zoomLevel} />
        {filteredVehicles.map((vehicle, index) => (
          <Marker
            key={index}
            position={[vehicle.lat, vehicle.lon]}
            icon={
              vehicle.jenis === "truk"
                ? trukIcon
                : vehicle.jenis === "mobil"
                ? mobilIcon
                : motorIcon
            }
          >
            <Popup>
              <div className="w-48 font-sans">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-black">
                    {vehicle.plate}
                  </h2>
                </div>
                <hr className="border-gray-300 my-2" />
                <div className="flex justify-around space-x-2 my-2">
                  <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                    <img
                      src="/images/call-button.svg"
                      alt="Call"
                      className="w-12"
                    />
                  </button>
                  <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                    <img
                      src="/images/off-button.svg"
                      alt="Alert"
                      className="w-12"
                    />
                  </button>
                  <button className="bg-transparent border-none cursor-pointer hover:shadow-md transition-shadow duration-200">
                    <img
                      src="/images/reload-button.svg"
                      alt="Power"
                      className="w-12"
                    />
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
        ))}
      </MapContainer>
      <div className="absolute bottom-60  right-2 z-20 w-[300px] h-10 bg-white bg-opacity-80 shadow-md p-4 rounded-lg items-center justify-center lg:flex hidden">
        <p className="text-sm font-semibold">Welcome, Fatur Arkan Syawalva</p>
      </div>

      <div className="absolute bottom-6 right-2 z-20 w-[370px] bg-white bg-opacity-80 shadow-md p-4 rounded-lg lg:block hidden">
        <div className="grid grid-cols-3 gap-1 text-sm font-semibold">
          {/* Row 1 */}
          <div className="flex items-center">
            <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
              {statusCounts.move}
            </span>
            <div className="ml-3">MOVE</div>
          </div>
          <div className="text-xs col-span-2 flex items-center justify-start">
            Engine ON, Speed more than 0 km/hour
          </div>

          <hr className="col-span-3 border-gray-300 my-2" />

          {/* Row 2 */}
          <div className="flex items-center">
            <span className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center text-xs text-white">
              {statusCounts.park}
            </span>
            <div className="ml-3">PARK</div>
          </div>
          <div className="text-xs col-span-2 flex items-center justify-start">
            Engine ON, Speed 0 km/hour
          </div>

          <hr className="col-span-3 border-gray-300 my-2" />

          {/* Row 3 */}
          <div className="flex items-center">
            <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs text-white">
              {statusCounts.off}
            </span>
            <div className="ml-3">OFF</div>
          </div>
          <div className="text-xs col-span-2 flex items-center justify-start">
            Engine OFF
          </div>

          <hr className="col-span-3 border-gray-300 my-2" />

          {/* Row 4 */}
          <div className="flex items-center">
            <span className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white">
              {statusCounts.miss}
            </span>
            <div className="ml-3">MISS</div>
          </div>
          <div className="text-xs col-span-2 flex items-center justify-start">
            Last update more than 12 hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMap;
