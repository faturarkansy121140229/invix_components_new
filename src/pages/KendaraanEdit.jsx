import React, { useState, useEffect } from "react";
import axios from "axios";
import { Label, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

import { API_URL } from "../utils/constants";
import { Button } from "flowbite-react";

export default function KendaraanEdit() {
  const [vehicle, setVehicle] = useState({});
  const [noKendaraan, setNoKendaraan] = useState(null);
  const [idPerangkat, setIdPerangkat] = useState(null);
  const [kategori, setKategori] = useState(null);
  const [driver, setDriver] = useState(null);
  const [operator, setOperator] = useState(null);
  const [noTelepon, setNoTelepon] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL + "vehicles/1")
      .then((res) => {
        const vehicle = res.data;
        console.log(vehicle);
        setVehicle(vehicle);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { noKendaraan, idPerangkat, kategori, noTelepon, operator, paket } =
      this.state;
    const url = `${API_URL}vehicles/${vehicle.id}`; // Change endpoint

    try {
      await axios.post(url, {
        noKendaraan: noKendaraan,
        idPerangkat: idPerangkat,
        kategori: kategori,
        noTelepon: noTelepon,
        operator: operator,
        paket: paket,
      });
      this.popupStatus("Success", "Device data has changed", "success");
    } catch (error) {
      console.log(error);
      this.popupStatus("Failed", "Cant't change device data", "error");
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-[85vw] lg:w-8/12 min-h-full p-3 border">
        <h3 className="title text-gray-600 text-center text-lg my-2 lg:my-6 font-semibold border-b-2 border-orange-400 flex justify-center">
          <strong>UBAH DATA KENDARAAN</strong>
        </h3>
        <div className="my-6">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="noKendaraan" value="No Kendaraan" />
            </div>
            <TextInput
              id="noKendaraan"
              value={noKendaraan ? noKendaraan : vehicle.no_kendaraan}
              onChange={(event) => setNoKendaraan(event.target.value)}
              placeholder={vehicle.no_kendaraan}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="idPerangkat" value="ID Perangkat" />
            </div>
            <TextInput
              id="idPerangkat"
              value={idPerangkat ? idPerangkat : vehicle.id_perangkat}
              onChange={(event) => setIdPerangkat(event.target.value)}
              placeholder={vehicle.id_perangkat}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="kategori" value="Kategori" />
            </div>
            <TextInput
              id="kategori"
              value={kategori ? kategori : vehicle.kategori}
              onChange={(event) => setKategori(event.target.value)}
              placeholder={vehicle.kategori}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="driver" value="Driver" />
            </div>
            <TextInput
              id="driver"
              value={driver ? driver : vehicle.driver}
              onChange={(event) => setDriver(event.target.value)}
              placeholder={vehicle.kategori}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="operator" value="Operator" />
            </div>
            <TextInput
              id="operator"
              value={operator ? operator : vehicle.operator}
              onChange={(event) => setOperator(event.target.value)}
              placeholder={vehicle.operator}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="noTelepon" value="No Telepon" />
            </div>
            <TextInput
              id="noTelepon"
              value={noTelepon ? noTelepon : vehicle.no_telepon}
              onChange={(event) => setNoTelepon(event.target.value)}
              placeholder={vehicle.no_telepon}
              required
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button onClick={handleSubmit} className="w-1/2">
            <p>
              <FontAwesomeIcon icon={faFloppyDisk} /> Simpan Data Kendaraan
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
