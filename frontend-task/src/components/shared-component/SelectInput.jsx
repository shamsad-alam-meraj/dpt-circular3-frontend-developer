import PropTypes from "prop-types";
import Select from "react-select";

export default function SelectInput({ options, width, placeholder }) {
  return (
    <Select
      className="basic-single h-10"
      classNamePrefix="select"
      onFocus={(e) => (e.target.readOnly = true)}
      name="color"
      options={options}
      placeholder={placeholder}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          width: width,
          height: 48,
          border: "1px solid #000000",
          outLine: "none",
          fontWeight: 500,
          fontSize: 13,
          borderRadius: 5,
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: "gray",
        }),
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          display: "none",
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "#000000",
        }),
      }}
    />
  );
}

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};
