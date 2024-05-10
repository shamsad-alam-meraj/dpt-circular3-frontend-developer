import PropTypes from 'prop-types';

export default function InputText({ placeholder }) {
  return (
    <input
      type="text"
      onChange={() => {}}
      className="appearance-none border border-black rounded p-2 text-lg h-12 w-52"
      placeholder={placeholder}
    />
  );
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
