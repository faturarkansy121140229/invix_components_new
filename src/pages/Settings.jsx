import React from "react";
import Table from "../components/Table";
import ProfileDetail from "../components/ProfileDetail";

const Settings = () => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="w-[85vw] lg:w-8/12 min-h-full py-4 rounded-lg">
        {/* <div className="m-2"> */}
        <h3 className="title text-gray-600 text-center text-lg mx-2 my-3 lg:my-6 p-1 font-semibold border-b-2 border-orange-400 flex justify-center">
          <strong>ACCOUNT SETTINGS</strong>
        </h3>
        <div className="flex justify-center items-center">
          <ProfileDetail />
        </div>
        {/* </div> */}
        {/* <div className="m-2">
        <h5 className="title text-center text-sm mx-2 p-1 font-semibold border-b-2 border-neutral-400 text-white bg-orange-400 flex justify-center lg:rounded-[20px]">
          <strong>DEVICES SETTINGS</strong>
        </h5>
        <hr />
        <Table />
      </div> */}
      </div>
    </div>
  );
};

export default Settings;
