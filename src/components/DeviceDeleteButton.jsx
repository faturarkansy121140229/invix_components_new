import React, { Component } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import swal from "sweetalert";

export default class DeviceDeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  setOpenModal = (value) => {
    this.setState({ openModal: value });
  };

  onCloseModal = () => {
    this.setOpenModal(false);
  };

  popupStatus = (title, text, icon) => {
    swal({
      title: title,
      text: text,
      icon: icon,
      buttons: false,
      timer: 1500,
    });
  };

  handleDelete = async (event, device) => {
    event.preventDefault();
    const url = `https://dikedo.com/api/device?id=${device.id}`; // Change endpoint

    try {
      await axios.delete(url);
      this.popupStatus("Success", "Device data has delete", "success");
    } catch (error) {
      console.log(error);
      this.popupStatus("Failed", "Cant't delete device data", "error");
    }
  };

  render() {
    const { device } = this.props;
    return (
      <>
        <Button
          onClick={(event) => this.handleDelete(event, device)}
          className="bg-red-500"
        >
          <FontAwesomeIcon icon={faTrash} className="fa-solid" />
        </Button>
      </>
    );
  }
}
