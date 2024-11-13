import React, { Component } from "react";
import { Dropdown } from "flowbite-react";

export default class FilterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      name: "",
      email: "",
    };
  }

  setName = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div>
        <Dropdown label="Dropdown button" dismissOnClick={false}>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    );
  }
}
