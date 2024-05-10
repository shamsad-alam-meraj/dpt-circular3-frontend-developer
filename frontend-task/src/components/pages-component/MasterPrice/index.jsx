import { useState } from "react";
import Loader from "../../shared/Loader";
import PageTitle from "../../shared/PageTitle";
import FlightList from "./FlightList";
import SearchButtonSection from "./SearchButtonSection";
import SearchFilter from "./SearchFilter";
import Tabs from "./Tabs";

export default function MasterPrice() {
  const [loading, setLoading] = useState(false);
  const handleSearch = () => {
    setLoading(true);
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
        {/* List Table Section  */}
        <FlightList />
      </div>
      {/* Loader Section  */}
      {loading ? <Loader /> : null}
    </div>
  );
}
