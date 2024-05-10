export default function Tabs() {
  return (
    <div className="border-2 border-blue-900 flex">
      <div className="p-1 font-medium w-24 flex items-center justify-center cursor-pointer">
        <p>Round Trip</p>
      </div>
      <div className="p-1 font-medium bg-blue-900  w-24 flex items-center justify-center cursor-pointer">
        <p className="text-white">One Way</p>
      </div>
      <div className="p-1 font-medium  w-24 flex items-center justify-center cursor-pointer">
        <p>Multi City</p>
      </div>
    </div>
  );
}
