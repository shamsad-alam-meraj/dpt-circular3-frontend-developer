import PropTypes from "prop-types";

export default function FlightList({ flights }) {
  return (
    <table className="table-auto w-full mt-10">
      <thead>
        <tr className="h-10 bg-gray-200">
          <th>Flight</th>
          <th>Aircraft</th>
          <th>Class</th>
          <th>Fare</th>
          <th>Route</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th></th>
          <th>Duration</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {flights?.map((flight, index) => (
          <tr
            className={
              "border-b border-red-500 " + (index % 2 !== 0 && "bg-gray-200")
            }
            key={index}
          >
            <td>
              {flight?.itineraries?.map((itinerary, itineraryIndex) => (
                <div key={itineraryIndex}>
                  {itinerary?.segments?.map((segment, segmentIndex) => (
                    <p key={segmentIndex}>
                      <span>
                        {segment?.marketingCarrier} {segment?.aircraft}
                      </span>
                    </p>
                  ))}
                </div>
              ))}
            </td>
            <td>
              {flight?.itineraries?.map((itinerary, itineraryIndex) => (
                <div key={itineraryIndex}>
                  {itinerary?.segments?.map((segment, segmentIndex) => (
                    <p key={segmentIndex}>
                      <span>{segment?.flightNumber}</span>
                    </p>
                  ))}
                </div>
              ))}
            </td>
            <td>
              {flight?.class?.map((cls, clsIndex) => (
                <div key={clsIndex}>
                  {cls?.map((cl, index) => (
                    <p key={index}>{cl}</p>
                  ))}
                </div>
              ))}
            </td>
            <td>
              {flight?.fareBasis?.map((fare, fareIndex) => (
                <div key={fareIndex}>
                  {fare?.map((fr, index) => (
                    <p key={index}>{fr}</p>
                  ))}
                </div>
              ))}
            </td>
            <td>
              {flight?.itineraries?.map((itinerary, itineraryIndex) => (
                <div key={itineraryIndex}>
                  {itinerary?.segments?.map((segment, segmentIndex) => (
                    <p key={segmentIndex}>
                      <span>
                        {segment?.departure?.iataCode}-
                        {segment?.arrival?.iataCode}
                      </span>
                    </p>
                  ))}
                </div>
              ))}
            </td>
            <td>
              {flight?.itineraries?.map((itinerary, itineraryIndex) => (
                <div key={itineraryIndex}>
                  {itinerary?.segments?.map((segment, segmentIndex) => (
                    <p key={segmentIndex}>
                      <span>{segment?.departure?.at}</span>
                    </p>
                  ))}
                </div>
              ))}
            </td>
            <td>
              {flight?.itineraries?.map((itinerary, itineraryIndex) => (
                <div key={itineraryIndex}>
                  {itinerary?.segments?.map((segment, segmentIndex) => (
                    <p key={segmentIndex}>
                      <span>{segment?.arrival?.at}</span>
                    </p>
                  ))}
                </div>
              ))}
            </td>
            <td className="flex flex-col">
              <span>---</span>
              <span>---</span>
            </td>
            <td>
              {flight?.itineraries?.map((itinerary, itineraryIndex) => (
                <div key={itineraryIndex}>
                  <p>{itinerary?.duration}</p>
                </div>
              ))}
            </td>
            <td>
              <div className="flex flex-col justify-center items-center">
                {flight?.price}
                <button className="btn btn-xs bg-blue-950 rounded-sm px-3 text-xs font-bold text-white py-1">
                  SELECT
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

FlightList.propTypes = {
  flights: PropTypes.array.isRequired,
};
