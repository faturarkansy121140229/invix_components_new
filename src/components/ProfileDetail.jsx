import React, { Component } from "react";
import { Button } from "flowbite-react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPencil } from "@fortawesome/free-solid-svg-icons";
import UserEditDataButton from "./UserEditDataButton";
import UserEditPasswordButton from "./UserEditPasswordButton";

export default function ProfileDetail() {
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center py-3">
        <div className="items-center lg:px-3">
          <img
            className="rounded-full w-28 lg:w-32"
            src="/public/images/user-profile.svg"
            alt="user image"
          />
        </div>

        <div className="ml-5 mt-3">
          <h5 className="text-white bg-green-400 text-center font-bold rounded-full">
            Verified User
          </h5>
          <h5>Nama : John Doe</h5>
          <h5>Email : example@gmail.com</h5>
          <div className="flex flex-auto mt-1">
            <UserEditDataButton className="m-4" />
            <UserEditPasswordButton />
          </div>
          {/* {isLg ? (
            <div className="flex flex-auto mt-1">
            </div>
          ) : (
            <div className="flex flex-auto mt-1">
              {" "}
              <Button
                onClick={() => {
                  navigate("/live-map");
                }}
                className="rounded-full mr-2"
              >
                <FontAwesomeIcon icon={faPencil} />
              </Button>
              <Button
                onClick={() => {
                  navigate("/rute");
                }}
                className="rounded-full mr-2"
              >
                Change Password
              </Button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
