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
          <h5>Mantap Jiwa</h5>
        </div>
      </div>
    );
  }
}
