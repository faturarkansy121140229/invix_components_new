import React from "react";
import Table from "../components/Table";
import FilterTable from "../components/FilterTable";
import Search from "../components/Search";

const Settings = () => {
  return (
    <div className="m-2">
      <h5 className="text-center">
        <strong>SETTINGS</strong>
      </h5>
      <hr />
      <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <FilterTable />
        <Search />
      </div>
      <Table />
    </div>
  );
};

export default Settings;
