import React, { Component } from "react";
import { Button } from "flowbite-react";
import UserEditDataButton from "./UserEditDataButton";
import UserEditPasswordButton from "./UserEditPasswordButton";

export default class ProfileDetail extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col md:flex-row items-center py-3">
          <div className="items-center">
            <img
              className="rounded-full w-32 h-32"
              src="/public/images/user-profile.svg"
              alt="user image"
            />
          </div>

          <div className="ml-5">
            <h5 className="text-white bg-green-400 text-center font-bold rounded-full">
              Verified User
            </h5>
            <h5>Nama : John Doe</h5>
            <h5>Email : example@gmail.com</h5>
            <div className="flex flex-auto mt-1">
              <UserEditDataButton className="m-4" />
              <UserEditPasswordButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
