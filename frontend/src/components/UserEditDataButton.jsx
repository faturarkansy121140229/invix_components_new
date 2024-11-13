import React, { Component } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import swal from "sweetalert";

export default class UserEditDataButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      name: "",
      email: "",
    };
  }

  setOpenModal = (value) => {
    this.setState({ openModal: value });
  };

  setName = (value) => {
    this.setState({ name: value });
  };

  setEmail = (value) => {
    this.setState({ email: value });
  };

  onCloseModal = () => {
    this.setOpenModal(false);
    this.serName("");
    this.setEmail("");
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email } = this.state;
    const url = "https://your-domain.com/api/login"; // Change to your actual endpoint

    try {
      await axios.post(url, {
        name: name,
        email: email,
      });
      this.popupStatus("Success", "User data has changed", "success");
    } catch (error) {
      console.log(error);
      this.popupStatus("Failed", "Cant't change user data", "error");
    }
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

  render() {
    const { openModal, name, email } = this.state;
    return (
      <>
        <Button
          onClick={() => this.setOpenModal(true)}
          className="rounded-full mr-2"
        >
          <FontAwesomeIcon icon={faPencil} className="fa-solid pt-1" />
        </Button>
        <Modal show={openModal} size="md" onClose={this.onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                Change User Data
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="userName" value="Your Name" />
                </div>
                <TextInput
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(event) => this.setName(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => this.setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <Button className="w-full">Save User Data</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
