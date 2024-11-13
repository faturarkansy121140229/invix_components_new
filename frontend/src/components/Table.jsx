import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
// import simpleDatatables from "simple-datatables";
// import $ from "jquery";
// import DataTable from "datatables.net-react";
// import DT from "datatables.net-dt";

import DeviceEditDataButton from "./DeviceEditDataButton";
import FilterTable from "./FilterTable";
import Search from "./Search";

// DataTable.use(DT);

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devices: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "devices")
      .then((res) => {
        const devices = res.data;
        this.setState({ devices });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  // componentWillUnmount() {
  //   $("#myTabel").DataTable().destroy(true);
  // }

  // datatablesHandler() {
  //   if (document.getElementById("default-table") && typeof simpleDatatables.DataTable !== 'undefined') {
  //     const dataTable = new simpleDatatables.DataTable("#default-table", {
  //         searchable: false,
  //         perPageSelect: false
  //     });
  // }
  // }

  render() {
    const { devices } = this.state;

    // const columns = [
    //   { name: "No", selector: (row, index) => index + 1 },
    //   { name: "No Kendaraan", selector: (row) => row.no_kendaraan },
    //   { name: "ID Perangkat", selector: (row) => row.id_perangkat },
    //   { name: "Kategori", selector: (row) => row.kategori },
    //   { name: "No Telepon", selector: (row) => row.no_telepon },
    //   { name: "Operator", selector: (row) => row.operator },
    // ];

    return (
      <div className="relative overflow-x-auto">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4 mx-3">
          <FilterTable />
          <Search />
        </div>

        <div className="relative overflow-x-auto">
          {/* <DataTable
            title="Devices"
            columns={columns}
            data={devices}
            pagination
          /> */}

          {/* <table id="search-table">
            <thead>
              <tr>
                <th>
                  <span className="flex items-center">Company Name</span>
                </th>
                <th>
                  <span className="flex items-center">Ticker</span>
                </th>
                <th>
                  <span className="flex items-center">Stock Price</span>
                </th>
                <th>
                  <span className="flex items-center">
                    Market Capitalization
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple Inc.
                </td>
                <td>AAPL</td>
                <td>$192.58</td>
                <td>$3.04T</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Microsoft Corporation
                </td>
                <td>MSFT</td>
                <td>$340.54</td>
                <td>$2.56T</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Alphabet Inc.
                </td>
                <td>GOOGL</td>
                <td>$134.12</td>
                <td>$1.72T</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Amazon.com Inc.
                </td>
                <td>AMZN</td>
                <td>$138.01</td>
                <td>$1.42T</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  NVIDIA Corporation
                </td>
                <td>NVDA</td>
                <td>$466.19</td>
                <td>$1.16T</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Tesla Inc.
                </td>
                <td>TSLA</td>
                <td>$255.98</td>
                <td>$811.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Meta Platforms Inc.
                </td>
                <td>META</td>
                <td>$311.71</td>
                <td>$816.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Berkshire Hathaway Inc.
                </td>
                <td>BRK.B</td>
                <td>$354.08</td>
                <td>$783.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  TSMC
                </td>
                <td>TSM</td>
                <td>$103.51</td>
                <td>$538.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  UnitedHealth Group Incorporated
                </td>
                <td>UNH</td>
                <td>$501.96</td>
                <td>$466.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Johnson & Johnson
                </td>
                <td>JNJ</td>
                <td>$172.85</td>
                <td>$452.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  JPMorgan Chase & Co.
                </td>
                <td>JPM</td>
                <td>$150.23</td>
                <td>$431.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Visa Inc.
                </td>
                <td>V</td>
                <td>$246.39</td>
                <td>$519.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Eli Lilly and Company
                </td>
                <td>LLY</td>
                <td>$582.97</td>
                <td>$552.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Walmart Inc.
                </td>
                <td>WMT</td>
                <td>$159.67</td>
                <td>$429.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Samsung Electronics Co., Ltd.
                </td>
                <td>005930.KS</td>
                <td>$70.22</td>
                <td>$429.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Procter & Gamble Co.
                </td>
                <td>PG</td>
                <td>$156.47</td>
                <td>$366.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Nestlé S.A.
                </td>
                <td>NESN.SW</td>
                <td>$120.51</td>
                <td>$338.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Roche Holding AG
                </td>
                <td>ROG.SW</td>
                <td>$296.00</td>
                <td>$317.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Chevron Corporation
                </td>
                <td>CVX</td>
                <td>$160.92</td>
                <td>$310.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  LVMH Moët Hennessy Louis Vuitton
                </td>
                <td>MC.PA</td>
                <td>$956.60</td>
                <td>$478.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Pfizer Inc.
                </td>
                <td>PFE</td>
                <td>$35.95</td>
                <td>$200.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Novo Nordisk A/S
                </td>
                <td>NVO</td>
                <td>$189.15</td>
                <td>$443.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  PepsiCo, Inc.
                </td>
                <td>PEP</td>
                <td>$182.56</td>
                <td>$311.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  ASML Holding N.V.
                </td>
                <td>ASML</td>
                <td>$665.72</td>
                <td>$273.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  The Coca-Cola Company
                </td>
                <td>KO</td>
                <td>$61.37</td>
                <td>$265.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Oracle Corporation
                </td>
                <td>ORCL</td>
                <td>$118.36</td>
                <td>$319.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Merck & Co., Inc.
                </td>
                <td>MRK</td>
                <td>$109.12</td>
                <td>$276.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Broadcom Inc.
                </td>
                <td>AVGO</td>
                <td>$861.80</td>
                <td>$356.00B</td>
              </tr>
              <tr>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Mastercard Incorporated
                </td>
                <td>MA</td>
                <td>$421.44</td>
                <td>$396.00B</td>
              </tr>
            </tbody>
          </table> */}

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
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
              {devices.map((device) => (
                <tr
                  key={device.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    {/* <Button data-id={device.id} onClick={() => {}}>
                    <FontAwesomeIcon icon={faPencil} className="fa-solid" />
                  </Button> */}
                    <DeviceEditDataButton device={device} />
                  </td>
                  <td className="px-6 py-4">{device.no_kendaraan}</td>
                  <td className="px-6 py-4">{device.id_perangkat}</td>
                  <td className="px-6 py-4">{device.kategori}</td>
                  <td className="px-6 py-4">{device.no_telepon}</td>
                  <td className="px-6 py-4">{device.operator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
