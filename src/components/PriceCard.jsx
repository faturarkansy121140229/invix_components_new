import React, { Component } from "react";
import { Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default class PriceCard extends Component {
  render() {
    return (
      <Card className="max-w-sm">
        <h5 className=" mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Service
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">Rp</span>
          <span className="text-5xl font-extrabold tracking-tight">5.000</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul className="my-7 space-y-5">
          <li className="flex space-x-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="w-2 h-2 p-1 text-white bg-cyan-600 rounded-full"
            />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              1 Device
            </span>
          </li>
          <li className="flex space-x-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="w-2 h-2 p-1 text-white bg-cyan-600 rounded-full"
            />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Live Update
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <FontAwesomeIcon
              icon={faCheck}
              className="w-2 h-2 p-1 text-white bg-gray-400 rounded-full"
            />
            <span className="text-base font-normal leading-tight text-gray-500">
              Location History
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <FontAwesomeIcon
              icon={faCheck}
              className="w-2 h-2 p-1 text-white bg-gray-400 rounded-full"
            />
            <span className="text-base font-normal leading-tight text-gray-500">
              On/Off Engine
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <FontAwesomeIcon
              icon={faCheck}
              className="w-2 h-2 p-1 text-white bg-gray-400 rounded-full"
            />
            <span className="text-base font-normal leading-tight text-gray-500">
              1 Bulan
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
        >
          Subscribe
        </button>
      </Card>
    );
  }
}
