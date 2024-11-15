import React, { Component } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import swal from "sweetalert";

export default class DeviceEditDataButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      noKendaraan: "",
      idPerangkat: "",
      kategori: "",
      noTelepon: "",
      operator: "",
    };
  }

  setOpenModal = (value) => {
    this.setState({ openModal: value });
  };

  setNoKendaraan = (value) => {
    this.setState({ noKendaraan: value });
  };

  setIdPerangkat = (value) => {
    this.setState({ idPerangkat: value });
  };

  setKategori = (value) => {
    this.setState({ kategori: value });
  };

  setNoTelepon = (value) => {
    this.setState({ noTelepon: value });
  };

  setOperator = (value) => {
    this.setState({ operator: value });
  };

  onCloseModal = () => {
    this.setOpenModal(false);
    this.setNoKendaraan("");
    this.setIdPerangkat("");
    this.setKategori("");
    this.setNoTelepon("");
    this.setOperator("");
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { noKendaraan, idPerangkat, kategori, noTelepon, operator } =
      this.state;
    const url = "https://dikedo.com/api/device?id={device.id}"; // Change endpoint

    try {
      await axios.post(url, {
        noKendaraan: noKendaraan,
        idPerangkat: idPerangkat,
        kategori: kategori,
        noTelepon: noTelepon,
        operator: operator,
      });
      this.popupStatus("Success", "Device data has changed", "success");
    } catch (error) {
      console.log(error);
      this.popupStatus("Failed", "Cant't change device data", "error");
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
    const {
      openModal,
      noKendaraan,
      idPerangkat,
      kategori,
      noTelepon,
      operator,
    } = this.state;
    const { device } = this.props;
    return (
      <>
        <Button onClick={() => this.setOpenModal(true)}>
          <FontAwesomeIcon icon={faPencil} className="fa-solid" />
        </Button>
        <Modal show={openModal} size="md" onClose={this.onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                Change Device Data
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="noKendaraan" value="No Kendaraan" />
                </div>
                <TextInput
                  id="noKendaraan"
                  value={noKendaraan ? noKendaraan : device.no_kendaraan}
                  onChange={(event) => this.setNoKendaraan(event.target.value)}
                  placeholder={device.no_kendaraan}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="idPerangkat" value="ID Perangkat" />
                </div>
                <TextInput
                  id="idPerangkat"
                  value={idPerangkat ? idPerangkat : device.id_perangkat}
                  onChange={(event) => this.setIdPerangkat(event.target.value)}
                  placeholder={device.id_perangkat}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="kategori" value="Kategori" />
                </div>
                <TextInput
                  id="kategori"
                  value={kategori ? kategori : device.kategori}
                  onChange={(event) => this.setKategori(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="noTelepon" value="No Telepon" />
                </div>
                <TextInput
                  id="noTelepon"
                  value={noTelepon ? noTelepon : device.no_telepon}
                  onChange={(event) => this.setNoTelepon(event.target.value)}
                  placeholder={device.no_telepon}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="operator" value="Operator" />
                </div>
                <TextInput
                  id="operator"
                  value={operator ? operator : device.operator}
                  onChange={(event) => this.setOperator(event.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <Button className="w-full">Save Device Data</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
