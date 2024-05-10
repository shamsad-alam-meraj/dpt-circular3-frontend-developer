import { useState } from "react";
import DatePicker from "../../shared/DatePicker";
import InputText from "../../shared/InputText";

export default function SearchFilter() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="py-3 border-y border-green-600">
      <div className="flex">
        {/* For From City */}
        <InputText placeholder="From"/>
        {/* For Destination City  */}
        <div className="mx-1">
          <InputText placeholder="To"/>
        </div>
        {/* For Travel Date  */}
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );
}
