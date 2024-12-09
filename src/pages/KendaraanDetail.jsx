import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

import { API_URL } from "../utils/constants";
import { Button, Modal } from "flowbite-react";

export default function KendaraanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL + `vehicles/${id}`)
      .then((res) => {
        const vehicle = res.data;
        setVehicle(vehicle);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  const handleDelete = async (event) => {
    event.preventDefault();
    const url = `/kendaraan/${vehicle.id}`; // Change endpoint

    try {
      await axios.delete(url);
      popupStatus("Success", "Kendaraan berhasil dihapus!", "success");
    } catch (error) {
      console.log(error);
      popupStatus("Failed", "Kendaraan gagal dihapus!", "error");
    }
  };

  const popupStatus = (title, text, icon) => {
    swal({
      title: title,
      text: text,
      icon: icon,
      buttons: false,
      timer: 1500,
    });
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-[85vw] lg:w-8/12 min-h-full p-3">
        <h3 className="title text-gray-600 text-center text-lg my-2 lg:my-6 font-semibold border-b-2 border-orange-400 flex justify-center">
          <strong>KENDARAAN DETAIL</strong>
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-3 my-6">
          <div>
            <p className="text-cyan-500 font-bold">No Kendaraaan</p>
            <p className="text-gray-600">{vehicle.no_kendaraan}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">ID Perangkat</p>
            <p className="text-gray-600">{vehicle.id_perangkat}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Kategori</p>
            <p className="text-gray-600">{vehicle.kategori}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Driver</p>
            <p className="text-gray-600">{vehicle.driver}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Update Terakhir</p>
            <p className="text-gray-600">{vehicle.last_update}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Operator</p>
            <p className="text-gray-600">{vehicle.operator}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">No Telepon</p>
            <p className="text-gray-600">{vehicle.no_telepon}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Mesin</p>
            <p className="text-gray-600">
              {vehicle.detail?.engineStatus || ""}
            </p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Kondisi</p>
            <p className="text-gray-600">{vehicle.detail?.status || ""}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Kecepatan</p>
            <p className="text-gray-600">{vehicle.detail?.speed || ""}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Longitude</p>
            <p className="text-gray-600">
              {vehicle.detail?.coordinate.longitude || ""}
            </p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Latitude</p>
            <p className="text-gray-600">
              {vehicle.detail?.coordinate.latitude || ""}
            </p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Jenis Paket</p>
            <p className="text-gray-600">{vehicle.subscription?.type || ""}</p>
          </div>
          <div>
            <p className="text-cyan-500 font-bold">Paket Berakhir</p>
            <p className="text-gray-600">
              {vehicle.subscription?.expired_date || ""}
            </p>
          </div>
        </div>
        <hr className="border-gray-300 my-2" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-3 justify-center items-center">
          <Button
            onClick={() => navigate(`/kendaraan/${vehicle.id}/edit`)}
            className="bg-cyan-500"
          >
            <p>
              <FontAwesomeIcon icon={faPencil} /> Edit Data Kendaraan
            </p>
          </Button>
          <Button onClick={() => setModal(true)} className="bg-red-500">
            <p>
              <FontAwesomeIcon icon={faTrash} /> Hapus Kendaraan
            </p>
          </Button>

          {/* Modal */}
          <Modal
            show={modal}
            size="md"
            onClose={() => {
              setModal(false);
            }}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <p className="py-6">Yakin ingin menghapus kendaraan ?</p>
              <Button
                onClick={() => {
                  handleDelete;
                }}
                className="w-full"
              >
                Hapus
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
