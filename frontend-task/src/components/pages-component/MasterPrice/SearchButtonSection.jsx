import PropTypes from "prop-types";

export default function SearchButtonSection({ handleSearch }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-green-600">
      {/* First Part  */}
      <div>
        {/* CheckBox  */}
        <input type="checkbox" name="option" id="option" />
        <label className="ml-2" htmlFor="option">
          Extra Option
        </label>
      </div>
      {/* Middle Part  */}
      <form className="flex">
        <h3 className="mr-2">Environment</h3>
        {/* Radio Buttons  */}
        <input checked type="radio" name="dummy" id="dummy" />
        <label className="mx-2" htmlFor="dummy">
          Dummy
        </label>
        <input type="radio" name="pdt" id="pdt" />
        <label className="ml-2" htmlFor="pdt">
          PDT
        </label>
      </form>
      {/* Last Part  */}
      <div>
        {/* Search Button  */}
        <button
          className="bg-[#00215E] py-2 px-3 text-white text-xs"
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}

SearchButtonSection.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
