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
        {/* <Dropdown label="Dropdown button" dismissOnClick={false}> */}
        <Dropdown value={10} dismissOnClick={false}>
          <Dropdown.Item>5</Dropdown.Item>
          <Dropdown.Item>10</Dropdown.Item>
          <Dropdown.Item>15</Dropdown.Item>
          <Dropdown.Item>20</Dropdown.Item>
          <Dropdown.Item>25</Dropdown.Item>
        </Dropdown>
      </div>
    );
  }
}
