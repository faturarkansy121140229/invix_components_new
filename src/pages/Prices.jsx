import { useEffect } from "react";
import axios from "axios";

import PriceCard from "../components/PriceCard";
import { API_URL } from "../utils/constants";

const Prices = () => {
  return (
    <div className="justify-center mb-4 text-xl font-medium text-black dark:text-gray-400">
      Pricing
      <div className="flex space-x-4 justify-center flex-col sm:flex-row">
        <PriceCard />
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
};

export default Prices;
