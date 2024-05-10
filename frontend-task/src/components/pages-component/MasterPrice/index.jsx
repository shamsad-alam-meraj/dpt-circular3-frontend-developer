import PageTitle from "../../shared/PageTitle";
import Tabs from "./Tabs";

export default function MasterPrice() {
  return (
    <div>
      <PageTitle title="Master Price" />
      <div className="flex justify-center items-center my-5">
        <Tabs />
      </div>
    </div>
  );
}
