import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [isLiveMapOpen, setIsLiveMapOpen] = useState(false);
    const [isLiveMapHovered, setIsLiveMapHovered] = useState(false);
    const [isKendaraanHovered, setIsKendaraanHovered] = useState(false);
    const [isTagihanHovered, setIsTagihanHovered] = useState(false);
    const [isRuteHovered, setIsRuteHovered] = useState(false);
    const [isEventHovered, setIsEventHovered] = useState(false);
    const [isTripHovered, setIsTripHovered] = useState(false);
    const [isReplayHovered, setIsReplayHovered] = useState(false);

    return (
        <div className="flex">
            <div className="relative w-64 min-h-screen h-full flex flex-col bg-gradient-to-t from-cyan-200 to-white p-6 rounded-tr-[30px] rounded-br-[30px] transition-all duration-300 shadow-[0_0px_5px_3px_rgba(0,0,0,0.2)]">
                <div className="sidebar head flex items-center mb-5">
                    <img src="/images/logo.svg" alt="Logo" className="w-7 h-10 mr-3" />
                    <h1 className="text-3xl text-black font-bold leading-none">
                        DIKEDO<span className="font-normal text-black">GPS</span>
                    </h1>
                </div>
                <div className="sidebar head flex gap-5 pb-5 pt-5 border-b border-t border-gray-300 mb-2">
                    <div className="user-img w-[44px] h-[44px] rounded-full overflow-hidden">
                        <img src="/images/user.png" alt="User Image" className="w-full object-cover" />
                    </div>
                    <div className="user-details">
                        <div className="title text-[14px] font-medium uppercase">Fatur Arkan</div>
                        <span className="text-gray-500 text-xs font-medium mb-2.5">fatur@gmail.com</span>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="menu">
                        <p className="title text-sm font-semibold text-white mb-2 bg-orange-400 flex justify-center mt-1 rounded-[20px]">Main</p>
                        <ul>
                            <li className="relative list-none active mb-1">
                                <Link
                                    to="/live-map"
                                    onClick={() => setIsLiveMapOpen(!isLiveMapOpen)}
                                    onMouseEnter={() => setIsLiveMapHovered(true)}
                                    onMouseLeave={() => setIsLiveMapHovered(false)}
                                    className={`flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg transition-all duration-300
                                    ${isLiveMapOpen ? 'bg-white text-cyan-600 font-bold' : 'hover:text-cyan-600 hover:bg-white hover:font-bold'}`}
                                >
                                    <img
                                        src={isLiveMapOpen || isLiveMapHovered ? "/images/livemap_active.svg" : "/images/livemap_unactive.svg"}
                                        alt="Live Map Icon"
                                        className="w-6 h-6"
                                    />
                                    <span className="text flex-1">Live Map</span>
                                    <span className="arrow ph-bold ph-house-simple text-xs transform transition-transform duration-300">
                                        <img
                                            src="/images/down.png"
                                            alt="down arrow"
                                            className={`w-4 h-4 inline transform transition-transform duration-300 ${isLiveMapOpen ? 'rotate-180' : 'rotate-0'}`}
                                        />
                                    </span>
                                </Link>
                                <ul className={`sub-menu ${isLiveMapOpen ? 'block' : 'hidden'} ml-5 pl-5 pt-1 border-l border-white`}>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg hover:text-cyan-600 hover:bg-white hover:font-bold"
                                            onMouseEnter={() => setIsLiveMapOpen(true)}
                                            onMouseLeave={() => setIsLiveMapOpen(false)}
                                        >
                                            <span className="text">Mobil A</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg hover:text-cyan-600 hover:bg-white hover:font-bold"
                                            onMouseEnter={() => setIsLiveMapOpen(true)}
                                            onMouseLeave={() => setIsLiveMapOpen(false)}
                                        >
                                            <span className="text">Mobil Y</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg hover:text-cyan-600 hover:bg-white hover:font-bold"
                                            onMouseEnter={() => setIsLiveMapOpen(true)}
                                            onMouseLeave={() => setIsLiveMapOpen(false)}
                                        >
                                            <span className="text">Mobil F</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="relative list-none active mb-1"
                                onMouseEnter={() => setIsKendaraanHovered(true)}
                                onMouseLeave={() => setIsKendaraanHovered(false)}
                            >
                                <Link
                                    to="/Kendaraan"
                                    className="flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg hover:text-cyan-600 hover:bg-white hover:font-bold"
                                >
                                    <img
                                        src={isKendaraanHovered ? "/images/kendaraan_active.svg" : "/images/kendaraan_unactive.svg"}
                                        alt="Kendaraan Logo"
                                        className="w-6 h-6"
                                    />
                                    <span className="text flex-1">Kendaraan</span>
                                </Link>
                            </li>
                            <li
                                className="relative list-none active mb-1"
                                onMouseEnter={() => setIsTagihanHovered(true)}
                                onMouseLeave={() => setIsTagihanHovered(false)}
                            >
                                <Link
                                    to="/Tagihan"
                                    className="flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg hover:text-cyan-600 hover:bg-white hover:font-bold"
                                >
                                    <img
                                        src={isTagihanHovered ? "/images/tagihan_active.svg" : "/images/tagihan_unactive.svg"}
                                        alt="Kendaraan Logo"
                                        className="w-6 h-6"
                                    />
                                    <span className="text flex-1">Tagihan</span>
                                </Link>
                            </li>
                        </ul>
                        <p className="title text-sm font-semibold text-white mb-2 bg-orange-400 flex justify-center mt-2 rounded-[20px]">Tracker</p>
                        <ul>
                            <li
                                className="relative list-none active mb-1"
                                onMouseEnter={() => setIsRuteHovered(true)}
                                onMouseLeave={() => setIsRuteHovered(false)}
                            >
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg hover:text-cyan-600 hover:bg-white hover:font-bold"
                                >
                                    <img
                                        src={isRuteHovered ? "/images/rute_active.svg" : "/images/rute_unactive.svg"}
                                        alt="Rute Logo"
                                        className="w-6 h-6"
                                    />
                                    <span className="text flex-1">Rute</span>
                                </a>
                            </li>
                            <li
                                className="relative list-none active mb-1"
                                onMouseEnter={() => setIsEventHovered(true)}
                                onMouseLeave={() => setIsEventHovered(false)}
                            >
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg hover:text-cyan-600 hover:bg-white hover:font-bold"
                                >
                                    <img
                                        src={isEventHovered ? "/images/event_active.svg" : "/images/event_unactive.svg"}
                                        alt="Event Logo"
                                        className="w-6 h-6"
                                    />
                                    <span className="text flex-1">Event</span>
                                </a>
                            </li>
                            <li
                                className="relative list-none active mb-1"
                                onMouseEnter={() => setIsTripHovered(true)}
                                onMouseLeave={() => setIsTripHovered(false)}
                            >
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg hover:text-cyan-600 hover:bg-white hover:font-bold"
                                >
                                    <img
                                        src={isTripHovered ? "/images/trip_active.svg" : "/images/trip_unactive.svg"}
                                        alt="Trip Logo"
                                        className="w-6 h-6"
                                    />
                                    <span className="text flex-1">Trip</span>
                                </a>
                            </li>
                            <li
                                className="relative list-none active mb-1"
                                onMouseEnter={() => setIsReplayHovered(true)}
                                onMouseLeave={() => setIsReplayHovered(false)}
                            >
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-black text-sm font-medium p-3 rounded-lg hover:text-cyan-600 hover:bg-white hover:font-bold"
                                >
                                    <img
                                        src={isReplayHovered ? "/images/replay_active.svg" : "/images/replay_unactive.svg"}
                                        alt="Replay Logo"
                                        className="w-6 h-6"
                                    />
                                    <span className="text flex-1">Replay</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
