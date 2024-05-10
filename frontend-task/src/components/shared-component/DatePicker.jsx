import PropTypes from "prop-types";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../assets/images/icons/calendar.png";
import moment from "moment";

// Define display name for CustomInput component
const CustomInput = forwardRef(({ onClick, selectedDate, viewDate }, ref) => (
  <div
    ref={ref}
    className={`w-52 h-12 flex items-center border border-black cursor-pointer rounded relative
      `}
    onClick={onClick}
  >
    <div className="flex">
      <span>
        {selectedDate ? (
          <h1 className="text-center pl-2.5 text-12 font-bold">
            {viewDate}
          </h1>
        ) : (
          <h1 className="text-center pl-2.5 text-12 font-normal text-gray-400">
            Select Date
          </h1>
        )}
      </span>
      <span className="absolute right-2">
        <img className="w-5 h-5" src={Calendar} alt="" />
      </span>
    </div>
  </div>
));

CustomInput.displayName = "CustomInput";

export default function DatePickerComponent({ selectedDate, setSelectedDate }) {
  let viewDate = moment(selectedDate).format("DD-MM-yyyy");
  const dateChanger = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        onFocus={(e) => (e.target.readOnly = true)}
        placeholderText="Select Date"
        selected={selectedDate}
        onChange={(date) => dateChanger(date)}
        customInput={
          <CustomInput selectedDate={selectedDate} viewDate={viewDate} />
        }
        // withPortal
      />
    </div>
  );
}

DatePickerComponent.propTypes = {
  selectedDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.oneOf([null]),
  ]),
  setSelectedDate: PropTypes.func.isRequired,
};

// Add prop validation for CustomInput component
CustomInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.oneOf([null]),
  ]),
  viewDate: PropTypes.string.isRequired,
};
