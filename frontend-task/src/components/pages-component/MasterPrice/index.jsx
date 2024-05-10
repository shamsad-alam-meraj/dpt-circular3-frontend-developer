import { useState } from "react";
import Loader from "../../shared/Loader";
import PageTitle from "../../shared/PageTitle";
import FlightList from "./FlightList";
import SearchButtonSection from "./SearchButtonSection";
import SearchFilter from "./SearchFilter";
import Tabs from "./Tabs";
import axios from "axios";

export default function MasterPrice() {
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const handleSearch = async () => {
    setLoading(true);
    try {
      let response = await axios.get("flights.json");
      if (response?.data?.code == 200) {
        setSuccessMessage(response?.data?.message);
        setFlights(response?.data?.flightOffer);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="relative">
      {/* Page Title Section - Shared/Common Component */}
      <PageTitle title="Master Price" />
      {/* Trip Tab Section  */}
      <div className="flex justify-center items-center my-5">
        <Tabs />
      </div>
      <div className="px-[10%]">
        {/* Search - Filter Section  */}
        <SearchFilter />
        {/* Search Button - Environment Section  */}
        <SearchButtonSection handleSearch={handleSearch} />
        {/* Success Message Section  */}
        {successMessage && <p>{successMessage}</p>}
        {/* List Table Section  */}
        {flights?.length > 0 && <FlightList flights={flights} />}
      </div>
      {/* Loader Section  */}
      {loading ? <Loader /> : null}
    </div>
  );
}
