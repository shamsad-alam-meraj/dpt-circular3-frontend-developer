import { useState } from "react";
import DatePicker from "../../shared-component/DatePicker";
import InputText from "../../shared-component/InputText";
import SelectInput from "../../shared-component/SelectInput";

export default function SearchFilter() {
  const [selectedDate, setSelectedDate] = useState(null);
  const options = [];
  for (let i = 1; i <= 31; i++) {
    const value = i < 10 ? `0${i}` : `${i}`;
    options.push({ value: value, label: `${i}` });
  }

  return (
    <div className="py-3 border-y border-green-600">
      <div className="flex justify-between w-full">
        {/* For From City */}
        <InputText placeholder="From" />
        {/* For Destination City  */}
        <div className="mx-1">
          <InputText placeholder="To" />
        </div>
        {/* For Travel Date  */}
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        {/* Day Selection  */}
        <SelectInput options={options} width={100} placeholder="Day - " />
        <SelectInput options={options} width={100} placeholder="Day + " />
        {/* Time Selection  */}
        <SelectInput options={options} width={200} placeholder="Anytime" />
        {/* + Icon   */}
        <div className="flex items-center font-bold text-xl">+</div>
        {/* Day Selection  */}
        <SelectInput options={options} width={100} placeholder="Day - " />
        <SelectInput options={options} width={100} placeholder="Day + " />
        {/* + Icon  */}
        <div className="flex items-center font-bold text-xl mr-2">+</div>
      </div>
    </div>
  );
}
