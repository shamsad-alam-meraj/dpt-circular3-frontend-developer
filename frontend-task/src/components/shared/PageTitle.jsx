import PropTypes from "prop-types";

export default function PageTitle({ title }) {
  return (
    <div className="py-1 border-b border-gray-500">
      <div className="px-[10%]">
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
