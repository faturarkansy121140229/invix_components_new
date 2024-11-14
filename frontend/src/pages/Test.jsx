import React, { Component } from "react";
import axios from "axios";
import { Table } from "flowbite-react";
import { DataTable } from "simple-datatables";

import { API_URL } from "../utils/constants";
import DeviceEditDataButton from "../components/DeviceEditDataButton";

export default class Test extends Component {
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

    this.initializeDataTable();
  }

  initializeDataTable = () => {
    if (
      document.getElementById("search-table") &&
      typeof DataTable !== "undefined"
    ) {
      const dataTable = new DataTable("#search-table", {
        searchable: true,
        sortable: false,
      });
    }
  };

  render() {
    const { devices } = this.state;
    return (
      <div>
        <div className="overflow-x-auto">
          <Table id="search-table">
            <Table.Head>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>No Kendaraan</Table.HeadCell>
              <Table.HeadCell>ID Perangkat</Table.HeadCell>
              <Table.HeadCell>Kategori</Table.HeadCell>
              <Table.HeadCell>No Telepon</Table.HeadCell>
              <Table.HeadCell>Operator</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {/* {devices && devices.length > 0 ? (
                devices.map((device) => (
                  <Table.Row key={device.id}>
                    <Table.Cell>
                      <DeviceEditDataButton />
                    </Table.Cell>
                    <Table.Cell>{device.no_kendaraan}</Table.Cell>
                    <Table.Cell>{device.id_perangkat}</Table.Cell>
                    <Table.Cell>{device.kategori}</Table.Cell>
                    <Table.Cell>{device.no_telepon}</Table.Cell>
                    <Table.Cell>{device.operator}</Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={6}>No devices found.</Table.Cell>
                </Table.Row>
              )} */}

              {/* <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>a</Table.Cell>
                <Table.Cell>b</Table.Cell>
                <Table.Cell>c</Table.Cell>
                <Table.Cell>d</Table.Cell>
                <Table.Cell>e</Table.Cell>
              </Table.Row> */}

              {/* <Table.Row>
                <Table.Cell colSpan={6}>No devices found.</Table.Cell>
              </Table.Row> */}
            </Table.Body>
          </Table>
        </div>
        <script></script>
      </div>
    );
  }
}
