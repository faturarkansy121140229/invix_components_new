import React from "react";
import Table from "../components/Table";
import ProfileDetail from "../components/ProfileDetail";

const Settings = () => {
  return (
    <div>
      <div className="m-2">
        <h5 className="title text-center text-sm mx-2 p-1 font-semibold border-b-2 border-neutral-400 text-white bg-orange-400 flex justify-center rounded-[20px]">
          <strong>ACCOUNT SETTINGS</strong>
        </h5>
        <div className="mx-10">
          <ProfileDetail />
        </div>
      </div>
      <div className="m-2">
        <h5 className="title text-center text-sm mx-2 p-1 font-semibold border-b-2 border-neutral-400 text-white bg-orange-400 flex justify-center rounded-[20px]">
          <strong>DEVICES SETTINGS</strong>
        </h5>
        <hr />
        <Table />
      </div>
    </div>
  );
};

export default Settings;
