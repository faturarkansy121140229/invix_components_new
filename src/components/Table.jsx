import React, { Component } from "react";
import DropDownFilter from "./FilterTable";
import Search from "./Search";

export default class Table extends Component {
  render() {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No Kendaraan
              </th>
              <th scope="col" className="px-6 py-3">
                ID Perangkat
              </th>
              <th scope="col" className="px-6 py-3">
                Kategori
              </th>
              <th scope="col" className="px-6 py-3">
                No Telepon
              </th>
              <th scope="col" className="px-6 py-3">
                Operator
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                className="px-6 py-4"
                // className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                B1977WSA
              </td>
              <td className="px-6 py-4">351510094574616</td>
              <td className="px-6 py-4">Mobil</td>
              <td className="px-6 py-4">081112113784</td>
              <td className="px-6 py-4">Telkomsel</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">B1977WSA</td>
              <td className="px-6 py-4">351510094574616</td>
              <td className="px-6 py-4">Mobil</td>
              <td className="px-6 py-4">081112113784</td>
              <td className="px-6 py-4">Telkomsel</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">B1977WSA</td>
              <td className="px-6 py-4">351510094574616</td>
              <td className="px-6 py-4">Mobil</td>
              <td className="px-6 py-4">081112113784</td>
              <td className="px-6 py-4">Telkomsel</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">B1977WSA</td>
              <td className="px-6 py-4">351510094574616</td>
              <td className="px-6 py-4">Mobil</td>
              <td className="px-6 py-4">081112113784</td>
              <td className="px-6 py-4">Telkomsel</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">B1977WSA</td>
              <td className="px-6 py-4">351510094574616</td>
              <td className="px-6 py-4">Mobil</td>
              <td className="px-6 py-4">081112113784</td>
              <td className="px-6 py-4">Telkomsel</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
