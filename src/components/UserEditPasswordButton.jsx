import React, { Component } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import swal from "sweetalert";

export default class UserEditDataButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      otp: "",
      oldPassword: "",
      newPassword: "",
    };
  }

  setOpenModal = (value) => {
    this.setState({ openModal: value });
  };

  setOtp = (value) => {
    this.setState({ otp: value });
  };

  setOldPassword = (value) => {
    this.setState({ oldPassword: value });
  };

  setNewPassword = (value) => {
    this.setState({ newPassword: value });
  };

  onCloseModal = () => {
    this.setOpenModal(false);
    this.setOtp("");
    this.setOldPassword("");
    this.setNewPassword("");
  };

  requestOtp = async (event) => {
    event.preventDefault();
    const url = "https://your-domain.com/api/login"; // Change to your actual endpoint

    try {
      await axios.post(url, {
        cookies: "test", // Perlu informasi lebih lanjut
      });
      this.popupStatus(
        "Success",
        "Please check your email messages",
        "success"
      );
    } catch (error) {
      console.log(error);
      this.popupStatus("Failed", "Cant't send OTP to your email", "error");
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { otp, oldPassword, newPassword } = this.state;
    const url = "https://your-domain.com/api/login"; // Change to your actual endpoint

    try {
      await axios.post(url, {
        otp: otp,
        oldPassword: oldPassword,
        newPassword: newPassword,
      });
      this.popupStatus("Success", "User password has changed", "success");
    } catch (error) {
      console.log(error);
      this.popupStatus("Failed", "Cant't change user password", "error");
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
    const { openModal, otp, oldPassword, newPassword } = this.state;
    return (
      <>
        <Button
          onClick={() => this.setOpenModal(true)}
          className="rounded-full mr-2"
        >
          Change Password
        </Button>
        <Modal show={openModal} size="md" onClose={this.onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                Change User Password
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="otp" value="OTP Code" />
                </div>
                <div className="flex flex-auto mt-1">
                  <TextInput
                    id="otp"
                    type="number"
                    placeholder="123456"
                    value={otp}
                    onChange={(event) => this.setOtp(event.target.value)}
                    className="w-5/6"
                    required
                  />
                  <Button className="w-1/6" onClick={() => requestOtp()}>
                    <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="oldPassword" value="Old Password" />
                </div>
                <TextInput
                  id="oldPassword"
                  type="password"
                  value={oldPassword}
                  onChange={(event) => this.setOldPassword(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="newPassword" value="New Password" />
                </div>
                <TextInput
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(event) => this.setNewPassword(event.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <Button onClick={this.handleSubmit} className="w-full">
                  Save User Password
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
